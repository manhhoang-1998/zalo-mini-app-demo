// OrderDetail.js
import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Page } from "zmp-ui";
import { BitrixApis } from "@apis";
import { OrderType } from "../flight/types/order.type";
import { formatCurrencyVND } from "@utils";

export const OrderDetail: FC = () => {
  const [order, setOrder] = useState<OrderType>();
  const { orderCode } = useParams();

  const navigate = useNavigate();
  const onClickBack = () => {
    navigate("/orders");
  };

  useEffect(() => {
    BitrixApis.getTransactionDetail({
      payload: orderCode as string,
      onSuccess: (data) => {
        setOrder({
          orderId: data.ID,
          title: data?.TITLE,
          amount: Number(data.OPPORTUNITY),
          createdTime: data?.DATE_CREATE,
          paymentMethod: "Thanh toán Online",
          additionalInfo: data?.ADDITIONAL_INFO
            ? JSON.parse(data.ADDITIONAL_INFO)
            : null,
        });
      },
    });
  }, [orderCode]);

  return (
    <Page className="p-4">
      <button onClick={onClickBack} className="text-blue-500">
        Back
      </button>
      <div className="mt-4 bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">
            {order?.additionalInfo?.departureName} ⇆{" "}
            {order?.additionalInfo?.arrivalName}
          </h1>
          <div className="text-green-500 font-semibold">
            Giao dịch thành công
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-600">Giao dịch vào: {order?.createdTime}</p>
          <p className="text-gray-600">
            Phương thức thanh toán: Thẻ thanh toán
          </p>
          <p className="font-semibold">
            Chi tiết giá: {formatCurrencyVND(order?.amount || 0)}
          </p>
        </div>
      </div>
    </Page>
  );
};

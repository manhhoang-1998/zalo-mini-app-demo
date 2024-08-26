// OrderList.js
import { BitrixApis } from "@apis";
import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "zmp-ui";
import { formatCurrencyVND } from "@utils";
import { OrderType } from "../flight/types/order.type";

export const Orders: FC = () => {
  const [orders, setOrders] = useState<OrderType[]>();

  const navigate = useNavigate();
  const onClickDetail = (orderId: string) => {
    navigate(`/order/${orderId}`);
  };

  const onClickBack = () => {
    navigate("/");
  };

  useEffect(() => {
    BitrixApis.getTransactions({
      payload: null,
      onSuccess: (data) => {
        const dataConverted: OrderType[] = data.map((i) => ({
          orderId: i.ID,
          title: i?.TITLE,
          amount: Number(i.OPPORTUNITY),
          createdTime: i?.DATE_CREATE,
          paymentMethod: "Thanh toán Online",
          additionalInfo: i?.ADDITIONAL_INFO
            ? JSON.parse(i.ADDITIONAL_INFO)
            : null,
        }));
        setOrders(dataConverted);
      },
    });
  }, []);

  console.log("[tetstststs]", orders);

  return (
    <Page className="page">
      <h1 className="text-lg font-semibold text-center">Danh sách giao dịch</h1>
      <button onClick={onClickBack} className="text-blue-500">
        Quay lại trang chủ
      </button>
      <div className="mt-4">
        {orders &&
          orders.map((order) => (
            <div
              key={order.orderId}
              onClick={() => onClickDetail(order.orderId)}
              className="bg-white p-4 rounded-lg shadow mb-4 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">{order.title}</p>
                  <p className="font-semibold">
                    {order?.additionalInfo?.departureCode} ⇆{" "}
                    {order?.additionalInfo?.arrivalCode}
                  </p>
                  <p className="text-green-600">{"Giao dịch thành công "}</p>
                </div>
                <div>
                  <p className="font-bold">{formatCurrencyVND(order.amount)}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Page>
  );
};

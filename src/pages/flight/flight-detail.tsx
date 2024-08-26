import React, { useEffect, useState } from "react";
import { Button, Page, useNavigate } from "zmp-ui";
import { FlightRoute } from "./types/flight.type";
import { useParams } from "react-router-dom";
import { FLIGHT_ROUTES } from "./simulators/flight.simulator";
import { formatCurrencyVND, formatMinutes } from "@utils";
import { toast } from "react-toastify";
import { BitrixApis } from "@apis";

export const FlightDetail = () => {
  const [routeData, setRouteData] = useState<FlightRoute>();

  const navigate = useNavigate();

  const { routeCode } = useParams();
  useEffect(() => {
    const routeData = FLIGHT_ROUTES.find((i) => i.routeCode == routeCode);
    setRouteData(routeData);
  }, [routeCode]);

  const onClickOrder = () => {
    BitrixApis.createTransactions({
      payload: {
        fields: {
          TITLE: "Đặt vé máy bay",
          STAGE_ID: "WON",
          OPPORTUNITY: routeData?.discountedPrice,
          CURRENCY_ID: "VND",
          OPENED: "Y",
          ADDITIONAL_INFO: JSON.stringify(routeData),
        },
      },
      onSuccess: () => {
        toast.success("Đặt vé thành công");
        navigate("/orders");
      },
    });
  };

  const onClickBack = () => {
    navigate("/");
  };

  return (
    <Page className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {routeData?.airline}
          </div>
          <div className="block mt-1 text-lg leading-tight font-medium text-black">
            {`${routeData?.departureName} (${routeData?.departureCode})`} →{" "}
            {`${routeData?.arrivalName} (${routeData?.arrivalCode})`}
          </div>
          <div className="mt-2 text-gray-500">
            <p>
              Thời gian bay: {formatMinutes(routeData?.duration || 0)} • Bay
              thẳng
            </p>
            <div className="flex items-center mt-4">
              <div className="flex flex-col">
                <span className="text-lg font-bold">
                  {routeData?.departureTime}
                </span>
                <span className="text-sm">29 thg 8</span>
                <span className="text-sm">{`${routeData?.departureName} (${routeData?.departureCode})`}</span>
              </div>
              <div className="mx-4">
                <span className="text-gray-500">
                  {formatMinutes(routeData?.duration || 0)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">
                  {routeData?.arrivalTime}
                </span>
                <span className="text-sm">29 thg 8</span>
                <span className="text-sm">{`${routeData?.arrivalName} (${routeData?.arrivalCode})`}</span>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-sm">
                Hành lý 0 kg • Hành lý xách tay 7 kg
              </span>
              <br />
              <span className="text-sm">
                Máy bay: Airbus {routeData?.planeCode}
              </span>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div className="text-sm text-gray-500 line-through">
              {formatCurrencyVND(routeData?.originalPrice || 0)}/khách
            </div>
            <div className="text-red-500 text-xl font-bold">
              {formatCurrencyVND(routeData?.discountedPrice || 0)}/khách
            </div>
          </div>
          <div className="flex justify-between pt-5">
            <Button onClick={onClickOrder} className="">
              Đặt vé
            </Button>
            <Button onClick={onClickBack} className="">
              Quay lại
            </Button>
          </div>
        </div>
      </div>
    </Page>
  );
};

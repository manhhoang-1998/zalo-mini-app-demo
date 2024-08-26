import React from "react";
import { FLIGHT_ROUTES } from "./simulators/flight.simulator";
import { useNavigate } from "react-router-dom";
import { Page } from "zmp-ui";
import { FlightRoute } from "./types/flight.type";
import { formatCurrencyVND, formatMinutes } from "@utils";

export interface IFlightCard extends FlightRoute {}

const FlightCard = (props: IFlightCard) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/flight/${props.routeCode}`);
  };

  return (
    <div onClick={onClick} className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={props.logo} alt="Airline Logo" className="h-6 mr-2" />
          <span className="font-medium text-lg">{props.airline}</span>
        </div>
        <div className="text-right">
          <span className="text-gray-400 line-through">
            {formatCurrencyVND(props.originalPrice)}
          </span>
          <span className="text-red-500 text-xl font-bold">
            {formatCurrencyVND(props.discountedPrice)}
          </span>
          <span className="text-sm">/khách</span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex flex-col">
          <span className="font-semibold text-lg">{props.departureTime}</span>
          <span className="text-sm">{props.departureCode}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gray-400">Bay thẳng</span>
          <span className="text-gray-400">{formatMinutes(props.duration)}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-lg">{props.arrivalTime}</span>
          <span className="text-sm">{props.arrivalCode}</span>
        </div>
      </div>
    </div>
  );
};

export const Flight = () => {
  return (
    <Page className="page">
      {FLIGHT_ROUTES.map((route) => (
        <FlightCard key={route.routeCode} {...route} />
      ))}
    </Page>
  );
};

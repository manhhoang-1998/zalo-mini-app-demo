import {
  Flight,
  FlightDetail,
  FlightSearch,
  HomePage,
  OrderDetail,
  Orders,
} from "@pages";
import { RoutesType } from "@types";
import React from "react";

export const APP_ROUTES: RoutesType[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/flight/search",
    element: <FlightSearch />,
  },
  {
    path: "/flight",
    element: <Flight />,
  },
  {
    path: "/flight/:routeCode",
    element: <FlightDetail />,
  },

  {
    path: "/orders",
    element: <Orders />,
  },

  {
    path: "/order/:orderCode",
    element: <OrderDetail />,
  },
  // Wrong nav
  {
    path: "*",
    element: <>Not found</>,
  },
];

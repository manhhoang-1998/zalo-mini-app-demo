import { HomePage } from "@pages";
import { RoutesType } from "@types";
import React from "react";

export const APP_ROUTES: RoutesType[] = [
  {
    path: "/",
    element: <HomePage />,
  },

  // Wrong nav
  {
    path: "*",
    element: <>Not found</>,
  },
];

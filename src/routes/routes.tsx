import { RoutesType } from "@types";
import React from "react";
import { HomePage } from "@pages";

export const APP_ROUTES: RoutesType[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/tesst",
    element: <>tesst</>,
  },
  // Wrong nav
  {
    path: "*",
    element: <>Not found</>,
  },
];

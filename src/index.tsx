import React from "react";
import { Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { AnimationRoutes, App, SnackbarProvider, ZMPRouter } from "zmp-ui";
import { APP_ROUTES } from "@routes";

export const BootStrap = () => (
  <RecoilRoot>
    <App>
      <SnackbarProvider>
        <ZMPRouter>
          <AnimationRoutes>
            {APP_ROUTES.map((r) => (
              <Route path={r.path} element={r.element}></Route>
            ))}
          </AnimationRoutes>
        </ZMPRouter>
      </SnackbarProvider>
    </App>
  </RecoilRoot>
);

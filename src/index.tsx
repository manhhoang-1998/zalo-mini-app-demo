import React from "react";
import { Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { AnimationRoutes, App, SnackbarProvider, ZMPRouter } from "zmp-ui";
import { APP_ROUTES } from "@routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const BootStrap = () => (
  <RecoilRoot>
    <App>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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

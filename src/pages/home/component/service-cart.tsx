import React, { FC, ReactNode } from "react";

export interface Iprops {
  title: string;
  desc: string;
  icon: ReactNode;
}

export const ServiceCart: FC = () => {
  return <div>service-cart</div>;
};

import React from "react";
import { Page } from "zmp-ui";
import { NAVBARS, SERVICES } from "./simulators/home.simulator";
import { useNavigate } from "react-router-dom";

export const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const onClickService = (item) => {
    navigate(item.path);
  };

  const onClickNavbar = (item) => {
    navigate(item.path);
  };

  return (
    <Page className="page">
      {/* Icon Menu */}
      <div className="grid grid-cols-4 gap-4 my-4">
        {SERVICES.map((item) => (
          <div
            onClick={() => onClickService(item)}
            key={item.label}
            className="flex flex-col items-center"
          >
            <div
              className={`${
                item?.isActive
                  ? "text-4xl"
                  : "text-4xl text-gray-400 filter grayscale opacity-50"
              }`}
            >
              {item.icon}
            </div>
            <div className="text-center text-sm mt-2">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Promo Banner */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="text-lg font-bold">Tuần lễ du lịch Mừng Quốc Khánh</div>
        <div className="text-gray-500">Giảm đến 20%</div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white flex justify-around p-2 shadow-md">
        {NAVBARS.map((item, index) => (
          <div
            onClick={() => onClickNavbar(item)}
            key={index}
            className="text-center"
          >
            <div className="text-xl">{item.icon}</div>
            <div className="text-xs">{item.label}</div>
          </div>
        ))}
      </div>
    </Page>
  );
};

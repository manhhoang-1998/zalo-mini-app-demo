import React from "react";
import { Input, Page } from "zmp-ui";

export const HomePage: React.FunctionComponent = () => {
  return (
    <Page className="page">
      {/* Icon Menu */}
      <div className="grid grid-cols-4 gap-4 my-4">
        {[
          { icon: "✈️", label: "Chuyến bay" },
          { icon: "🏨", label: "Khách sạn" },
          { icon: "🎉", label: "Xperience" },
          { icon: "🚐", label: "Đưa đón sân bay" },
          { icon: "🚗", label: "Car Rental" },
          { icon: "🏖️", label: "Holiday Stays" },
          { icon: "🎁", label: "Gift Voucher" },
          { icon: "🅿️", label: "Loyalty Points" },
          { icon: "🔔", label: "Price Alert" },
          { icon: "🛩️", label: "Flight Status" },
          { icon: "🧳", label: "Tours" },
          { icon: "🎡", label: "Attractions" },
          { icon: "🧾", label: "Combo tiết kiệm" },
          { icon: "🚌", label: "Vé xe khách" },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <div className="text-4xl">{item.icon}</div>
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
        <div className="text-center">
          <div className="text-blue-500 text-xl">🏠</div>
          <div className="text-xs">Trang chủ</div>
        </div>
        <div className="text-center">
          <div className="text-xl">🔖</div>
          <div className="text-xs">Đã Lưu</div>
        </div>
        <div className="text-center">
          <div className="text-xl">📅</div>
          <div className="text-xs">Đặt chỗ của tôi</div>
        </div>
        <div className="text-center">
          <div className="text-xl">👤</div>
          <div className="text-xs">Tài khoản</div>
        </div>
      </div>
    </Page>
  );
};

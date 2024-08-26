import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Switch, DatePicker, Page } from "zmp-ui"; // Replace with actual component imports

export const FlightSearch = () => {
  const [isRoundTrip, setIsRoundTrip] = useState(true);

  const navigate = useNavigate();
  const onSearch = () => {
    navigate("/flight");
  };

  return (
    <Page className="min-h-screen bg-blue-500 page">
      <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold text-center mb-4">
          Từ Đông Nam Á Đến Thế Giới, Trong Tầm Tay Bạn
        </h1>
        <form className="space-y-4">
          {/* Departure Input */}
          <div>
            <label className="block text-gray-700">Từ</label>
            <Input
              placeholder="Hà Nội (HAN)"
              prefix={<span>✈️</span>}
              value="Hà Nội (HAN)"
              readOnly
            />
          </div>

          {/* Destination Input */}
          <div>
            <label className="block text-gray-700">Đến</label>
            <Input
              placeholder="TP HCM (SGN)"
              prefix={<span>✈️</span>}
              value="TP HCM (SGN)"
              readOnly
            />
          </div>

          {/* Departure Date */}
          <div>
            <label className="block text-gray-700">Ngày đi</label>
            <DatePicker />
          </div>

          {/* Return Date */}
          {isRoundTrip && (
            <div>
              <label className="block text-gray-700">Ngày về</label>
              <DatePicker />
            </div>
          )}

          {/* Toggle Round Trip */}
          <div className="flex items-center">
            <label className="mr-2">Khứ hồi?</label>
            <Switch
              checked={isRoundTrip}
              onChange={() => setIsRoundTrip(!isRoundTrip)}
            />
          </div>

          {/* Passengers and Class */}
          <div className="flex justify-between">
            <Input
              placeholder="1 hành khách"
              prefix={<span>👤</span>}
              value="1 hành khách"
              readOnly
            />
            <Input
              placeholder="Economy"
              prefix={<span>💺</span>}
              value="Economy"
              readOnly
            />
          </div>

          {/* Search Button */}
          <Button onClick={onSearch} className="w-full mt-4">
            Tìm kiếm
          </Button>
        </form>
      </div>
    </Page>
  );
};

export function formatCurrencyVND(amount: number) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0, // VND usually doesn't use decimal places
    maximumFractionDigits: 0,
  }).format(amount);
}

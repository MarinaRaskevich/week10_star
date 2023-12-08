const calculateTotalPrice = (quantity = 2, price = 15000000) => {
  return quantity * price;
};

const total = calculateTotalPrice();

function showPrice() {
  document.getElementById(
    "price"
  ).textContent = `Стоимость покупки: ${total.toLocaleString("ru-RU")} рублей`;
  //   alert(total.toLocaleString("ru-RU"));
}

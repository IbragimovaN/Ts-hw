const totalPrice = ({ price, discount, isInstallment, months, }) => {
    let total = price - (discount / 100) * price;
    isInstallment ? (total = total / months) : "";
    return total;
};
const price = totalPrice({
    price: 100000,
    discount: 25,
    isInstallment: true,
    months: 12,
});
console.log(price);

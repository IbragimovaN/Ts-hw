//1.тк аргументом функции является объект, может типизировать его пр помощи interface, типизируем каждое поле, учитывая что месяцы будут обязательны только если isInstallment true
//2. Напишем какой тип данных фуекция возвращает
interface PriceOptions {
  price: number;
  discount: number;
  isInstallment: boolean;
  months?: number;
}

const totalPrice = ({
  price,
  discount,
  isInstallment,
  months,
}: PriceOptions): number => {
  let total: number = price - (discount / 100) * price;
  isInstallment ? (total = total / months!) : "";
  return total;
};

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});
console.log(price);

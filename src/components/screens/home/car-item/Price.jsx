import { memo } from "react";
const Price = ({ price }) => {
  return <p>{new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'USD' }).format(price)}</p>;
};
export default memo(Price);













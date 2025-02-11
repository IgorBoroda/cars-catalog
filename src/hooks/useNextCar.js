import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useNextCar(cars) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const goToNextCar = () => {
    if (!cars || cars.length === 0) {
        console.warn("Массив машин ещё не загружен");
        return;
    }
    const nextIndex = (currentIndex + 1) % cars.length;
    setCurrentIndex(nextIndex);
    navigate(`/car/${cars[nextIndex].id}`);
  };

  return goToNextCar;
}
// import { useNextCar } from "../../../hooks/useNextCar";
// const goToNextCar = useNextCar(cars_);
// <button onClick={goToNextCar}>Следующая машина</button>

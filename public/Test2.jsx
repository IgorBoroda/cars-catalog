
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query"
import { CarService } from "../src/services/car.service";
import CarItem from "../src/components/screens/home/car-item/Caritem";

export const Test2=()=>{
// Дополнительные
// Переменная	Описание 
// isFetching	true, если идет загрузка, даже если данные уже есть (например, обновление кеша).
// isSuccess	true, если запрос успешно завершен.
// isError	true, если произошла ошибка.
// isRefetching	true, если данные обновляются повторно.
// status	Может быть "loading", "error" или "success".
const { data, isLoading, error } = useQuery({ 
  queryKey: ["users3333"],
  queryFn: CarService.getAll,
})
if (isLoading)return;
// queryKey	Уникальный ключ запроса (используется для кеширования).
// queryFn	Функция, которая загружает данные (например, fetchUsers).
// staleTime	Время (в мс), в течение которого данные считаются "свежими".
// cacheTime	Время (в мс), сколько данные хранятся в кеше после удаления.
// enabled	false, если не нужно загружать данные сразу (можно загружать вручную).
// retry	Сколько раз пробовать запрос при ошибке (по умолчанию 3).
// refetchOnWindowFocus	true, если обновлять данные при фокусе на вкладке.

  return(
  <div>
    <div>
    <Link to='/'> Home </Link>
    </div>
        <div>
        {data.length ? 
          data.map(car => <CarItem key={car.id} car={car} />) : 
          <p>There are no cars</p>
        }
      </div>
  </div>
  )
}






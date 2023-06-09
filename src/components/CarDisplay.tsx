import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type Car = {
  id: number;
  name: string;
  mileage: string;
  year: number;
};

const CarDisplay = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
      .then((response) => response.json())
      .then((data) => setCar(data));
  }, [id]);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Car Details</h2>
      <p>Name: {car.name}</p>
      <p>Mileage: {car.mileage}</p>
      <p>Year: {car.year}</p>
    </div>
  );
};

export default CarDisplay;
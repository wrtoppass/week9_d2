import React, { useContext, useState } from 'react';
import { AuthContext } from './Auth';
import  Car from './CarDisplay';

const CarForm = () => {
  const { user } = useContext(AuthContext);
  const [name, setname] = useState('');
  const [mileage, setmileage] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newCar: typeof Car = {
      name,
      mileage,
      year: parseInt(year, 10),
    };
    console.log('New car:', newCar);
    setname('');
    setmileage('');
    setYear('');
  };

  if (!user) {
    return null;
  }

  return (
    <div>
      <h2>Add a Car</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="mileage">mileage:</label>
          <input
            type="text"
            id="mileage"
            value={mileage}
            onChange={(e) => setmileage(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default CarForm;
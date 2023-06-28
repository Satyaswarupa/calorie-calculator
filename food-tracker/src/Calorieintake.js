import React, { useState, useEffect } from 'react';
import './Calorieintake.css'




const Calorieintake= () => {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const storedEntries = localStorage.getItem('foodEntries');
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('foodEntries', JSON.stringify(entries));
  }, [entries]);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFoodChange = (event) => {
    setFood(event.target.value);
    calculateCalories(event.target.value);
  };

  const calculateCalories = (foodName) => {
    
    const calories = foodName.length * 10;
    setCalories(calories);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handleAddEntry = () => {
    const entry = {
      date,
      name,
      food,
      calories: calories * quantity,
      quantity,
    };
    setEntries([...entries, entry]);
    setDate('');
    setName('');
    setFood('');
    setCalories(0);
    setQuantity(1);
  };

  const handleDeleteEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
  };

  return (
  
    <div className='app'>
     
      <div className='entry-form'>
        <label>Date:</label>
        <input type="date" value={date} onChange={handleDateChange} />
     
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
      
        <label>Food:</label>
        <input type="text" value={food} onChange={handleFoodChange} />
      
        <label>Calories:</label>
        <span>{calories * quantity}</span>
     
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={handleQuantityChange}
        />
      </div>
      <button onClick={handleAddEntry}>Add Food</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Food</th>
            <th>Calories</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.name}</td>
              <td>{entry.food}</td>
              <td>{entry.calories}</td>
              <td>{entry.quantity}</td>
              <td>
                <button onClick={() => handleDeleteEntry(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 
  );
};

export default Calorieintake;
import React, { useState, useEffect } from 'react';
import './Calorieburned.css'

const Calorieburned = () => {
  const [entries, setEntries] = useState([]);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [activity, setActivity] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [target, setTarget] = useState(2000);

  useEffect(() => {
    const storedEntries = localStorage.getItem('calorieEntries');
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('calorieEntries', JSON.stringify(entries));
  }, [entries]);

  const handleAddEntry = () => {
    const newEntry = {
      date,
      name,
      activity,
      caloriesBurned,
    };
    setEntries([...entries, newEntry]);
    setDate('');
    setName('');
    setActivity('');
    setCaloriesBurned(0);
  };

  const handleDeleteEntry = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  return (
    <div className="app">
      
      <div className="entry-form">
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Activity:</label>
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <label>Calories Burned:</label>
        <input
          type="number"
          value={caloriesBurned}
          onChange={(e) => setCaloriesBurned(parseInt(e.target.value))}
        />
        <button onClick={handleAddEntry}>Add Entry</button>
      </div>
      <div className="target">
        <label>Target Calories Burned:</label>
        <input
          type="number"
          value={target}
          onChange={(e) => setTarget(parseInt(e.target.value))}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Activity</th>
            <th>Calories Burned</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.name}</td>
              <td>{entry.activity}</td>
              <td>{entry.caloriesBurned}</td>
              <td>
                <button onClick={() => handleDeleteEntry(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="summary">
        <h2>Summary</h2>
        <p>Total Calories Burned: {entries.reduce((total, entry) => total + entry.caloriesBurned, 0)}</p>
        <p>Target Calories Burned: {target}</p>
      </div>
    </div>
  );
};

export default Calorieburned ;
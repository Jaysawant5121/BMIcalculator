import React, { useState } from 'react';
import './index.css';
import './App.css'
import underweightImage from '../src/assets/underweight.png';
import healthyImage from '../src/assets/healthy.png';
import overweightImage from '../src/assets/overweight.png';

const App = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const reload = () => {
    window.location.reload();
  };

  const calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0 || weight === '' || height === '') {
      alert("Please enter valid numbers.");
    }
    else {
      const calculatedBmi = weight / (height * height) * 10000;
      setBmi(calculatedBmi.toFixed(1));
      // console.log(calculatedBmi);
      if (calculatedBmi < 25) {
        setMessage('You are underweight');
      } else if (calculatedBmi >= 25 && calculatedBmi <= 30) {
        setMessage('You are a healthy weight');
      } else {
        setMessage('You are overweight');
      }
    }
  };

  let imgSrc;
  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 25) {
      imgSrc = underweightImage;
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = healthyImage;
    } else {
      imgSrc = overweightImage;
    }
  }

  return (
    <div className='main'>
       <h1>BMI Calculator</h1>
      <form onSubmit={calcBmi}>
        <label>Weight (KG)</label>
        <input type='number' value={weight} onChange={(e) => setWeight(e.target.value)} /><br />
        <label>Height (CM)</label>
        <input type='number' value={height} onChange={(e) => setHeight(e.target.value)} /><br /><br />
        <div className="style">
        <button type='submit'>Calculate</button> &nbsp;&nbsp;
        <button onClick={reload}>Refresh</button><br />
        </div>
      </form>
      <div>
        <h3>Your BMI is {bmi}</h3>
        <h4>{message}</h4>
      </div>
      <div>
        <img src={imgSrc} alt='' />
      </div>
    </div>
  );
};

export default App;

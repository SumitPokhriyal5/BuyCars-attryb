import { useDispatch, useSelector } from 'react-redux';
import { createCarApi } from '../store/cars/cars.api';
import { useState } from 'react';
import { ICreateCar } from '../types/cars.types';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';
import '../assets/scss/createCar.scss';
import { RootState } from '../store/store';

interface CreateCarProps {
  oemId: string;
}

function CreateCar({ oemId }: CreateCarProps) {
  const { loading } = useSelector((store: RootState) => store.authManager);
  const dispatch = useDispatch<ThunkDispatch<any, null, AnyAction>>();

  const [carImage, setCarImage] = useState('');
  const [odometer, setOdometer] = useState(0);
  const [majorScratches, setMajorScratches] = useState('');
  const [originalPaint, setOriginalPaint] = useState(false);
  const [noOfAccidents, setNoOfAccidents] = useState(0);
  const [noOfPreviousBuyers, setNoOfPreviousBuyers] = useState(0);
  const [registrationPlace, setRegistrationPlace] = useState('');

  const handleCreateCar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const CarObj: ICreateCar = {
      oemSpec: oemId,
      carImage,
      odometer,
      majorScratches,
      originalPaint,
      registrationPlace,
    };

    if (noOfAccidents) CarObj.noOfAccidents = noOfAccidents;
    if (noOfPreviousBuyers) CarObj.noOfPreviousBuyers = noOfPreviousBuyers;

    dispatch(createCarApi(CarObj)); // call an action for the car doc creation

    // Reset the form
    setCarImage('');
    setOdometer(0);
    setMajorScratches('');
    setOriginalPaint(false);
    setNoOfAccidents(0);
    setNoOfPreviousBuyers(0);
    setRegistrationPlace('');
  };

  return (
    <div className="createCar">
      <h3>Sell car with selected OEM (Original Equipment Manufacturers Specifications)</h3>
      <form onSubmit={handleCreateCar}>
        <label htmlFor="image">Image of the car:</label>
        <input type="url" id="image" placeholder="Image of the car" value={carImage} onChange={(e) => setCarImage(e.target.value)} required />

        <label htmlFor="odometer">Odometer's current value:</label>
        <input type="number" id="odometer" placeholder="Odometer's current value" value={odometer} onChange={(e) => setOdometer(+e.target.value)} required />

        <label htmlFor="scratches">Major Scratches:</label>
        <input type="text" id="scratches" placeholder="Major Scratches" value={majorScratches} onChange={(e) => setMajorScratches(e.target.value)} required />

        <div>
          <label htmlFor="originalPaint">Original Paint:</label>
          <input type="checkbox" name="originalPaint" id="originalPaint" checked={originalPaint} onChange={(e) => setOriginalPaint(e.target.checked)} />
        </div>

        <label htmlFor="noOfAccidents">No of Accidents:</label>
        <input type="number" id="noOfAccidents" placeholder="No of Accidents" value={noOfAccidents} onChange={(e) => setNoOfAccidents(+e.target.value)} />

        <label htmlFor="noOfPreviousBuyers">No of Previous Buyers:</label>
        <input type="number" id="noOfPreviousBuyers" placeholder="No of Previous Buyers" value={noOfPreviousBuyers} onChange={(e) => setNoOfPreviousBuyers(+e.target.value)} />

        <label htmlFor="registrationPlace">Registration Place:</label>
        <input type="text" id="registrationPlace" placeholder="Registration Place" value={registrationPlace} onChange={(e) => setRegistrationPlace(e.target.value)} required />

        <input disabled={loading} type="submit" value={loading ? 'Please Wait...' : 'Sell Car'} />
      </form>
    </div>
  );
}

export default CreateCar;


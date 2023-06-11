import { useState } from 'react';
import { RxCrossCircled } from "react-icons/rx"
import { useDispatch } from 'react-redux';
import React from 'react';
import { updateCarApi } from '../store/cars/cars.api';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';
import "../assets/scss/modal.scss"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  element: {
    carImage: string;
    majorScratches: string;
    noOfAccidents: number;
    noOfPreviousBuyers: number;
    odometer: number;
    originalPaint: boolean;
    registrationPlace: string;
    _id: string;
  };
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, element }) => {
  const { carImage, majorScratches, noOfAccidents, noOfPreviousBuyers, odometer, originalPaint, registrationPlace, _id } = element;
  const dispatch = useDispatch<ThunkDispatch<any, null, AnyAction>>()

  const [image, setImage] = useState(carImage);
  const [newOdometer, setNewOdometer] = useState(odometer);
  const [newScratches, setNewScratches] = useState(majorScratches);
  const [newOriginalPaint, setNewOriginalPaint] = useState(originalPaint);
  const [newNoOfAccidents, setNewNoOfAccidents] = useState(noOfAccidents);
  const [newNoOfPrevBuyers, setNewNoOfPrevBuyers] = useState(noOfPreviousBuyers);
  const [newRegistrationPlace, setNewRegistrationPlace] = useState(registrationPlace);

  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const update: any = {};
    if (image !== carImage) update.carImage = image;
    if (+newOdometer !== odometer) update.odometer = +newOdometer;
    if (newScratches !== majorScratches) update.majorScratches = newScratches;
    if (newOriginalPaint !== originalPaint) update.originalPaint = newOriginalPaint;
    if (+newNoOfAccidents !== noOfAccidents) update.noOfAccidents = +newNoOfAccidents;
    if (+newNoOfPrevBuyers !== noOfPreviousBuyers) update.noOfPreviousBuyers = +newNoOfPrevBuyers;
    if (newRegistrationPlace !== registrationPlace) update.registrationPlace = newRegistrationPlace;

    dispatch(updateCarApi({ carId: _id, update }));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Edit car info</h2>
          <RxCrossCircled style={{ cursor: 'pointer' }} onClick={onClose} />
        </div>
        <div className="modal-body">
          <form className='edit-form' onSubmit={handleEdit}>
            <input type="url" id="image" placeholder="Image of the car" value={image} onChange={(e) => setImage(e.target.value)} />
            <input type="number" id="odometer" placeholder="Odometer's current value" value={newOdometer} onChange={(e) => setNewOdometer(+e.target.value)} />
            <input type="text" id="scratches" placeholder="Major Scratches" value={newScratches} onChange={(e) => setNewScratches(e.target.value)} />
            <div>
              <label htmlFor="originalPaint">Original Paint </label>
              <input type="checkbox" name="originalPaint" id="originalPaint" checked={newOriginalPaint} onChange={(e) => setNewOriginalPaint(e.target.checked)} />
            </div>
            <input type="number" id="noOfAccidents" placeholder="No of Accidents" value={newNoOfAccidents} onChange={(e) => setNewNoOfAccidents(+e.target.value)} />
            <input type="number" id="noOfprevBuyers" placeholder="No of Previous Buyers" value={newNoOfPrevBuyers} onChange={(e) => setNewNoOfPrevBuyers(+e.target.value)} />
            <input type="text" id="registrationPlace" placeholder="Registration Place" value={newRegistrationPlace} onChange={(e) => setNewRegistrationPlace(e.target.value)} />
            <input type="submit" value="Update car details 🚗" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;

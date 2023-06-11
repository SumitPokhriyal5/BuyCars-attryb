import { AiFillEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import Modal from "./Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCarApi } from "../store/cars/cars.api";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";
import "../assets/scss/Card.scss"

interface CardProps {
  element: {
    carImage: string;
    dealer: { username: string };
    majorScratches: string;
    noOfAccidents: number;
    noOfPreviousBuyers: number;
    odometer: number;
    oemSpec: {
      brand: string;
      model: string;
      listPrice: number;
      maxSpeed: number;
      mileage: string;
      power: string;
      year: number;
      colors: string[];
    };
    originalPaint: boolean;
    registrationPlace: string;
    _id: string;
  };
}

const Card: React.FC<CardProps> = ({ element }) => {
  const userName = localStorage.getItem("username")
  const loggedInUser = userName ? JSON.parse(userName) : "";
  const dispatch = useDispatch<ThunkDispatch<any, null, AnyAction>>()
  const {
    carImage,
    dealer,
    majorScratches,
    noOfAccidents,
    noOfPreviousBuyers,
    odometer,
    oemSpec,
    originalPaint,
    registrationPlace,
    _id,
  } = element;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteCarApi(_id)); // call the action for deleting a specific car
  };

  // close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="card-container">
      <div className="oemSpecs-container">
        <div>
          <img src={carImage} />
        </div>
        <div>
          <div>
            <span>Brand</span>
            <span>{oemSpec?.brand}</span>
          </div>
          <div>
            <span>Model</span>
            <span>{oemSpec?.model}</span>
          </div>
          <div>
            <span>Price</span>
            <span>₹{oemSpec?.listPrice} /-</span>
          </div>
          <div>
            <span>Max Speed</span>
            <span>{oemSpec?.maxSpeed} KM/H</span>
          </div>
          <div>
            <span>Mileage</span>
            <span>{oemSpec?.mileage}</span>
          </div>
          <div>
            <span>Power</span>
            <span>{oemSpec?.power} BHP</span>
          </div>
          <div>
            <span>Official Launch</span>
            <span>{oemSpec?.year}</span>
          </div>
          <div>
            <span>Colors</span>
            {oemSpec?.colors?.map((ele, i) => {
              return (
                <span
                  key={i}
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: ele.toLowerCase(),
                    display: "inline-block",
                    marginRight: "5px",
                  }}
                ></span>
              );
            })}
          </div>
        </div>
      </div>
      <hr/>
      <div className="dealer-container">
        <div>
            <div className="dealer-name">
            <span>Dealer: </span>
          <span>{dealer?.username.toUpperCase()}</span>
            </div>
         

          <div className="dealer-buy-edit">
            {/* If the user is the dealer then only the user can see the edit and delete button */}
            {loggedInUser !== dealer?.username ? (
              <div className="buyNow-btn">
                <button>Buy Now</button>
              </div>
            ) : (
              <div className="edit-del-btn">
                <button onClick={openModal}>
                  <span>Edit</span>
                  <AiFillEdit />
                </button>
                <button onClick={handleDelete}>
                  <span>Delete</span>
                  <MdDeleteOutline />
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          <div>
            <div>
              <span>Scratches : </span>
              <span>{!majorScratches ? "-" : majorScratches}</span>
            </div>
            <div>
              <span>No. Of Accidents : </span>
              <span>{noOfAccidents}</span>
            </div>
            <div>
              <span>No. Of Owners :</span>
              <span>{noOfPreviousBuyers}</span>
            </div>
            <div>
              <span>Odometer :</span>
              <span>{odometer}</span>
            </div>
            <div>
              <span>Original Paint :</span>
              <span>{originalPaint ? "Original" : "Repainted"}</span>
            </div>
            <div>
              <span>Registered At :</span>
              <span>{registrationPlace}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Edit modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} element={element} />
    </div>
  );
};

export default Card;

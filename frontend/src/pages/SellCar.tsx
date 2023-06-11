import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import CreateCar from '../components/CreateCar';
import { RootState } from '../store/store';
import { getAllOemsApi } from '../store/oems/oems.api';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';
import '../assets/scss/sellCar.scss'
import Navbar from '../components/Navbar';

function SellCar() {
    const dispatch = useDispatch<ThunkDispatch<any, null, AnyAction>>()

  const { loading, data } = useSelector((store: RootState) => store.oemsManager);
  const searchRef = useRef<HTMLInputElement>(null);
  const [selectedOem, setSelectedOem] = useState<string>("");
  const [queryString, setQueryString] = useState<string>("");

  const handleSearch = () => {
    let url = "";
    if (searchRef.current?.value) url += `q=${searchRef.current?.value}`;
    setQueryString(url);
  }

  useEffect(() => {
    dispatch(getAllOemsApi(queryString));
  }, [dispatch, queryString]);

  return (
    <>
    <Navbar/>
    <div className="sellCar">
      <div className="queryContainer">
        <div className="searchContainer">
          <input type="search" placeholder="Search here!" ref={searchRef} />
          <span className='bs-search'><BsSearch onClick={handleSearch} /></span>
          
        </div>
      </div>

      {/* OEM specs */}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="oemSpecsContainer">
          <table>
            <caption>Original Equipment Manufacturers Specifications</caption>
            <thead>
              <tr>
                <th>Sr no</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Year</th>
                <th>List-Price</th>
                <th>Colors</th>
                <th>Mileage</th>
                <th>Power (in BHP)</th>
                <th>Max-speed</th>
                <th>Choose</th>
              </tr>
            </thead>

            <tbody>
              {data?.map((el, indx) => (
                <tr key={el._id}>
                  <td>{indx + 1}</td>
                  <td>{el?.brand}</td>
                  <td>{el?.model}</td>
                  <td>{el?.year}</td>
                  <td>{el?.listPrice}</td>
                  <td>
                    {el?.colors?.map((ele, i) => (
                      <span
                        key={i}
                        style={{
                          height: "20px",
                          width: "20px",
                          border: "1px solid gray",
                          borderRadius: "50%",
                          backgroundColor: ele.toLowerCase(),
                          display: 'inline-block',
                          marginRight: "5px"
                        }}
                      ></span>
                    ))}
                  </td>
                  <td>{el?.mileage}</td>
                  <td>{el?.power}</td>
                  <td>{el?.maxSpeed}</td>
                  <td>
                    <button
                      style={{
                        backgroundColor: `${el._id === selectedOem ? "#033aff" : "white"}`,
                        color: `${el._id === selectedOem ? "white" : "#033aff"}`
                      }}
                      onClick={() => {
                        setSelectedOem(el._id);
                      }}
                    >
                      Choose OEM
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* show the create form only when you selected any OEM */}
      {selectedOem && <CreateCar oemId={selectedOem} />}
    </div>
    </>
  );
}

export default SellCar;

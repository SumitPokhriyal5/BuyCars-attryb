import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import Card from '../components/Card';
import { getAllCarsApi } from '../store/cars/cars.api';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';
import Navbar from '../components/Navbar';

import "../assets/scss/Home.scss"
import { ICarData } from '../types/cars.types';
const debouncer = (cb: () => void, delay: number) => {
  let timerRef: any;
  return () => {
    if (timerRef) {
      clearTimeout(timerRef);
      timerRef = undefined;
    }
    timerRef = setTimeout(cb, delay);
  };
};

function Home() {
    const dispatch = useDispatch<ThunkDispatch<any, null, AnyAction>>()
  const { loading, data } = useSelector((store: any) => store.carsManager);
  const searchRef = useRef<HTMLInputElement>(null);
  const colorRef = useRef<HTMLSelectElement>(null);
  const minpriceRef = useRef<HTMLInputElement>(null);
  const maxpriceRef = useRef<HTMLInputElement>(null);
  const minmileageRef = useRef<HTMLInputElement>(null);
  const maxmileageRef = useRef<HTMLInputElement>(null);
  const [queryUrl, setQueryUrl] = useState<string>("");

  const createQueryUrl = () => {
    let url = "";
    if (searchRef.current?.value) url += `q=${searchRef.current.value}`;
    if (colorRef.current?.value) url += `color=${colorRef.current.value}`;
    if (minpriceRef.current?.value) url += `minprice=${minpriceRef.current.value}`;
    if (maxpriceRef.current?.value) url += `maxprice=${maxpriceRef.current.value}`;
    if (minmileageRef.current?.value) url += `minmileage=${minmileageRef.current.value}`;
    if (maxmileageRef.current?.value) url += `maxmileage=${maxmileageRef.current.value}`;
    setQueryUrl(url);
  };

  const debounce = debouncer(createQueryUrl, 600);

  useEffect(() => {
    dispatch(getAllCarsApi(queryUrl));
  }, [queryUrl, dispatch]);

  return (
    <>
    <Navbar/>
    <div className='home'>
      <div className="queries">
        <div className="search">
          <input type="search" placeholder='Search Model here!' ref={searchRef} onInput={debounce} />
          <span><BsSearch onClick={createQueryUrl} /></span>
        </div>

        {/* Choose color */}
        <select className='color-select' ref={colorRef} onChange={debounce}>
          <option value="">Choose color</option>
          <option value="White">White</option>
          <option value="Silver">Silver</option>
          <option value="Black">Black</option>
          <option value="Gray">Gray</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Yellow">Yellow</option>
        </select>

        {/* Filter on Pricing */}
        <div className="price-filter">
          <span>Price:</span>
          <span>
            <input type="number" placeholder='Min price' min={0} ref={minpriceRef} onInput={debounce} />
            <input type="number" placeholder='Max price' min={0} ref={maxpriceRef} onInput={debounce} />
          </span>
        </div>

        {/* Filter on Mileage */}
        <div className="mileage-filter">
          <span>Mileage:</span>
          <span>
            <input type="number" placeholder='Min mileage' min={0} ref={minmileageRef} onInput={debounce} />
            <input type="number" placeholder='Max mileage' min={0} ref={maxmileageRef} onInput={debounce} />
          </span>
        </div>
      </div>
      {/* map cars */}
      {loading ? <img className='loadingGif' src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="loading..." /> : (
        <div className="cars">
          {data?.map((el: ICarData) => <Card key={el._id} element={el} />)}
        </div>
      )}
    </div>
    </>
  );
}

export default Home;

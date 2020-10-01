import React from 'react';
import Loader from '../../UI/Loader';

const WeatherLoading = () => {
    return (
        <div className="flex justify-center items-center h-full">
           <Loader />
        </div>
    );
};

export default WeatherLoading;
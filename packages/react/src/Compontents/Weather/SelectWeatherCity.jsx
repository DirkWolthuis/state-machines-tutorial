import React from 'react';

const SelectWeatherCity = () => {
    return (
        <div className="flex justify-center items-center h-full">
         <input type="text" placeholder="enter city" className="py-2 px-3 border-2 border-white rounded bg-transparent mr-4"/>
         <button className="py-2 px-3 rounded border-2 border-white font-bold text-white hover:bg-white hover:text-gray-800">Select city</button>
        </div>
    );
};

export default SelectWeatherCity;
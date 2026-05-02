import React, { useState } from 'react';

const PriceSlider = () => {
  
  const rangeValues = [500, 25000, 200000, "Ilimitado"];
  const [index, setIndex] = useState(0);

  const handleChange = (e) => {
    setIndex(parseInt(e.target.value));
  };

  const currentValue = rangeValues[index];

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div className="flex justify-between items-center">
        <label className="text-gray-700 font-bold">Selecciona tu presupuesto: </label>
        <span className="text-blue-600 font-mono font-bold text-lg">
          {typeof currentValue === 'number' 
            ? `$${currentValue.toLocaleString()}` 
            : currentValue}
        </span>
      </div>

      <input
        type="range"
        min="0"
        max={rangeValues.length - 1}
        step="1"
        value={index}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
      />

      
    </div>
  );
};

export default PriceSlider;
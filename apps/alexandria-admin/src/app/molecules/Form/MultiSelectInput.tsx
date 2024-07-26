import React, { useState, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';

import Select from 'react-select';
import debounce from 'lodash.debounce';

const fetchOptions = async (inputValue) => {
  // Substitua este fetch por sua lógica de busca de dados
  const response = await fetch(
    `https://api.example.com/options?query=${inputValue}`
  );
  const data = await response.json();
  return data.map((option) => ({ label: option.name, value: option.id }));
};

const MultiSelect = () => {
  const { control, handleSubmit } = useForm();
  const [options, setOptions] = useState([]);

  const loadOptions = useCallback(
    debounce(async (inputValue) => {
      if (inputValue.length > 0) {
        const newOptions = await fetchOptions(inputValue);
        setOptions(newOptions);
      }
    }, 300),
    []
  );

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="multiSelect"
        >
          Select Options
        </label>
        <Controller
          name="multiSelect"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              isMulti
              options={options}
              onInputChange={loadOptions}
              className="react-select-container"
              classNamePrefix="react-select"
            />
          )}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default MultiSelect;

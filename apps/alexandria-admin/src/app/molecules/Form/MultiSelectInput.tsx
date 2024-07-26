import { useState, useCallback } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

import AsyncSelect from 'react-select/async';
import debounce from 'lodash.debounce';
import request from '../../services';

const fetchOptions = async (inputValue: string, apiEndpoint = 'content') => {
  const { data } = await request(`/${apiEndpoint}/search?q=${inputValue}`);
  return data.map((option) => ({ label: option.title, value: option.id }));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MultiSelect = ({
  field,
  api,
  defaultValue
}: {
  field: ControllerRenderProps<any, any>;
  api: string;
  defaultValue: unknown;
}) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadOptions = async (inputValue: string, callback) => {
    if (inputValue.length > 0) {
      const newOptions = await fetchOptions(inputValue, api);
      callback(newOptions);
    }
  };
  console.log(field);
  return (
    <div className="my-4">
      <AsyncSelect
        {...field}
        isMulti={true}
        loadOptions={loadOptions}
        className="react-select-container"
        classNamePrefix="react-select"
        defaultValue={[{ id: '0', label: 'Manga' }]}
        cacheOptions
      />
    </div>
  );
};

export default MultiSelect;

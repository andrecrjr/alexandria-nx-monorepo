import { useState, useCallback } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

import AsyncSelect from 'react-select/async';
import debounce from 'lodash.debounce';
import request from '../../services';
import { Options, OptionsOrGroups } from 'react-select/dist/declarations/src';

const fetchOptions = async (inputValue: string, apiEndpoint = 'content') => {
  const { data } = await request(`/${apiEndpoint}/search?q=${inputValue}`);
  return data.map((option: any) => ({ label: option.title, id: option.id }));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MultiSelect = ({
  field,
  api,
  defaultValue
}: {
  field: ControllerRenderProps<any, any>;
  api?: string;
  defaultValue: unknown;
}) => {
  const loadOptions = async (inputValue: string) => {
    if (inputValue.length > 0) {
      const newOptions = await fetchOptions(inputValue, api);
      return newOptions;
    }
    return;
  };

  const debouncedLoadOptions = debounce(loadOptions, 300);

  return (
    <div className="my-4">
      <AsyncSelect
        {...field}
        isMulti={true}
        loadOptions={debouncedLoadOptions}
        className="react-select-container"
        classNamePrefix="react-select"
        defaultValue={[{ id: '0', label: 'Manga' }]}
        cacheOptions
      />
    </div>
  );
};

export default MultiSelect;

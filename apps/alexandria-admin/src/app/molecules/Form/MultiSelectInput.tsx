import { ControllerRenderProps } from 'react-hook-form';

import AsyncSelect from 'react-select/async';
import debounce from 'lodash.debounce';
import request from '../../services';
import { ApiEntitySetting } from '@alexandria/shared-dto-api/enums';
import { convertMultiSelectToApiData } from '../../utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MultiSelect = ({
  field,
  apiSettings,
  defaultValue,
  isMulti = true
}: {
  field?: ControllerRenderProps<any, any>;
  apiSettings: ApiEntitySetting;
  defaultValue?: unknown;
  isMulti?: boolean;
}) => {
  const fetchOptions = async (
    inputValue: string,
    entitySearch: ApiEntitySetting
  ) => {
    const { data } = await request(
      `/search?entity=${entitySearch.model}&field=${entitySearch.keySearch}&value=${inputValue}`
    );
    const autoComplete = data.map((option: any) => ({
      [entitySearch.keySearch]: option[entitySearch.keySearch],
      id: option?.id
    }));
    console.log(autoComplete);
    return autoComplete;
  };

  const loadOptions = async (item: string) => {
    return await fetchOptions(item, apiSettings);
  };
  const debouncedLoadOptions = debounce(loadOptions, 200);

  return (
    <div className="my-4">
      <AsyncSelect
        {...field}
        loadOptions={loadOptions}
        isMulti={isMulti}
        className="react-select-container"
        classNamePrefix="react-select"
        getOptionLabel={(option) => option[apiSettings.keySearch]}
        getOptionValue={(option) => option.id}
        onChange={(selected) => {
          console.log(selected);
          field?.onChange(selected);
        }}
      />
    </div>
  );
};

export default MultiSelect;

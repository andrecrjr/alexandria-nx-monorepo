import { ControllerRenderProps } from 'react-hook-form';

import AsyncSelect from 'react-select/async';
import debounce from 'lodash.debounce';
import request from '../../services';
import { ApiEntitySetting } from '@alexandria/shared-dto-api/enums';

const fetchOptions = async (
  inputValue: string,
  entitySearch: ApiEntitySetting
) => {
  const { data } = await request(
    `/search?entity=${entitySearch.model}&field=${entitySearch.keySearch}&value=${inputValue}`
  );
  return data.map((option: any) => ({ label: option.title, id: option.id }));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MultiSelect = ({
  field,
  apiSettings,
  defaultValue
}: {
  field: ControllerRenderProps<any, any>;
  apiSettings: ApiEntitySetting;
  defaultValue: unknown;
}) => {
  console.log(defaultValue);
  const loadOptions = async (inputValue: string) => {
    if (inputValue.length > 0) {
      const newOptions = await fetchOptions(inputValue, apiSettings);
      return newOptions;
    }
    return;
  };

  const debouncedLoadOptions = debounce(loadOptions, 600);

  return (
    <div className="my-4">
      <AsyncSelect
        {...field}
        isMulti={true}
        loadOptions={debouncedLoadOptions}
        className="react-select-container"
        classNamePrefix="react-select"
        defaultValue={[{ id: 0, label: defaultValue?.title || '' }]}
        cacheOptions
      />
    </div>
  );
};

export default MultiSelect;

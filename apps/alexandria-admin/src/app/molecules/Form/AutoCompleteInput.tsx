import { useCallback, useEffect, useState } from 'react';

import { Button, CommandList } from '@alexandria/shadcn-ui';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from '@alexandria/shadcn-ui';
import { Popover, PopoverContent, PopoverTrigger } from '@alexandria/shadcn-ui';
import request from '../../services';
import { useDebounce } from '../../hooks';

export function ComboboxDemo() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);
  const searchQuery = useDebounce(value, 1000);
  const fetchOptions = useCallback(async () => {
    const { data } = await request('/genre-content');
    console.log(data);
    setOptions(data.map((item) => ({ value: item.id, label: item.name })));
  }, [searchQuery]);
  useEffect(() => {
    console.log(searchQuery);
    if (searchQuery?.length > 1) {
      fetchOptions();
    }
  }, [searchQuery]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px]  justify-between"
        >
          {value ? value : 'Select framework...'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-black">
        <Command shouldFilter={true}>
          <CommandInput
            placeholder="Search framework..."
            value={value}
            onValueChange={setValue}
            className="h-9"
          />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandList>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                  console.log(currentValue);
                }}
              >
                {option.label}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

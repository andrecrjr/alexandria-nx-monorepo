import { useToast } from '@alexandria/shadcn-ui/components/ui/use-toast';
import { ActionsButtonAdmin } from '../types/ActionsList';
import request from '../services';
import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

export function useAdminButtons<T>(
  endpointType: string,
  warnUpdateKey: string
): ActionsButtonAdmin<T> {
  const { toast } = useToast();
  const goTo = useNavigate();

  const Actions = [
    {
      label: 'Editar',
      type: 'link',
      linkPath: (item: T) => `edit/${item['id' as keyof T]}`
    },
    {
      label: 'Deletar',
      type: 'button',
      linkPath: (item: T) => `delete/${item['id' as keyof T]}`,
      action: async (item: T) => {
        try {
          await request(`${endpointType}/${item['id' as keyof T]}`, {
            method: 'DELETE'
          });
          toast({
            description: `Deleted ${
              item[warnUpdateKey as keyof T]
            } with successful`
          });
          goTo(`/${endpointType}`);
        } catch (error) {
          toast({
            description: `Problem to delete ${item[warnUpdateKey as keyof T]}`
          });
        }
      }
    }
  ];

  return Actions;
}

export const useDebounce = (value: string, milliSeconds: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, milliSeconds);

    return () => {
      clearTimeout(handler);
    };
  }, [value, milliSeconds]);

  return debouncedValue;
};

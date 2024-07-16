/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, Label } from '@alexandria/shadcn-ui';

export const GenericInput = ({
  register,
  errors,
  label,
  ...rest
}: {
  register: any;
  errors: any;
  label: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...rest}>
      <Label>{label}</Label>
      <Input {...register} className="sm:min-w-64" />
      {errors ? <p className="text-red-500">{errors.message}</p> : null}
    </div>
  );
};

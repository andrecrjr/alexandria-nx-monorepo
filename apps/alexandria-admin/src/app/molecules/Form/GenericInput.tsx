/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, Label } from '@alexandria/shadcn-ui';

export const GenericInput = ({
  register,
  errors,
  label,
  divElement,
  inputElement,
  ...rest
}: {
  register: any;
  errors: any;
  label: string;
  divElement?: React.HTMLAttributes<HTMLDivElement>;
  inputElement?: React.InputHTMLAttributes<HTMLInputElement>;
}) => {
  return (
    <div {...divElement}>
      <Label>{label}</Label>
      <Input {...inputElement} type="" {...register} className="sm:min-w-64" />
      {errors ? <p className="text-red-500">{errors.message}</p> : null}
    </div>
  );
};

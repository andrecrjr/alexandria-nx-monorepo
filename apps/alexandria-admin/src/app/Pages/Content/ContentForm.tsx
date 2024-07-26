import { toast } from '@alexandria/shadcn-ui/components/ui/use-toast';
import { Controller, useForm } from 'react-hook-form';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Button, Checkbox, Input } from '@alexandria/shadcn-ui';
import request from '../../services';
import { useNavigate } from 'react-router-dom';
import { CreateContentSchemaDTO } from '@alexandria/shared-dto-api/content/formSchema';
import { GenericInput } from '../../molecules/Form/GenericInput';
import MultiSelect from '../../molecules/Form/MultiSelectInput';
const resolver = classValidatorResolver(CreateContentSchemaDTO);

type Props = {
  initialValues?: CreateContentSchemaDTO;
  editId?: string;
};

const apiEndpoint = 'contenttype';

export const ContentForm = ({ initialValues, editId }: Props) => {
  const {
    handleSubmit,
    register,
    control,
    getValues,

    formState: { errors, defaultValues }
  } = useForm<CreateContentSchemaDTO>({
    resolver: resolver,
    defaultValues: { ...initialValues }
  });
  const goTo = useNavigate();
  console.log(getValues());

  async function onSubmit(data: CreateContentSchemaDTO) {
    try {
      console.log(data);
      // await request(`${apiEndpoint}${initialValues ? `/${editId}` : ''}`, {
      //   method: initialValues ? 'PATCH' : 'POST',
      //   data: {
      //     title: data.title,
      //     description: data.description,
      //     contentTypeId: data.contentTypeId,
      //     numberPages: data.numberPages,
      //     imageUrl: data.imageUrl,
      //     contentType: {},
      //     createdBy: {},
      //     isbn: 'string'
      //   }
      // });
      // toast({
      //   title: `You ${editId ? 'updated' : 'submitted'} the following Genre:`,
      //   description: (
      //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
      //       <code className="text-white">
      //         {JSON.stringify(data.title, null)}
      //       </code>
      //     </pre>
      //   )
      // });
      // goTo(`/${apiEndpoint}`);
    } catch (error) {
      toast({
        title: 'Problem to send data to the server',
        description: <p>Try again later!</p>
      });
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-4 w-6/12 mx-auto"
    >
      <div>
        <GenericInput
          errors={errors.title}
          divElement={{
            className:
              'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          }}
          label="Content's Title"
          register={register('title', { required: true })}
          inputElement={{
            type: 'text'
          }}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          {...register('description', { required: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        ></textarea>
        {errors.description && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Content Type
        </label>
        <Controller
          name="contentType"
          control={control}
          render={({ field }) => (
            <MultiSelect
              field={field}
              api={'contenttype'}
              defaultValue={defaultValues?.contentType}
            />
          )}
        />
      </div>

      <div>
        <GenericInput
          errors={errors.title}
          divElement={{
            className:
              'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          }}
          label="Page's Number"
          register={register('numberPages', { required: true })}
          inputElement={{
            type: 'text'
          }}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="text"
          {...register('imageUrl', { required: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.imageUrl && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>

      <div>
        <GenericInput
          errors={errors.isbn}
          divElement={{
            className:
              'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          }}
          label="isbn"
          register={register('isbn', { required: true })}
          inputElement={{
            type: 'text'
          }}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Authors
        </label>
        <div className="flex space-x-4">
          <label>
            <Checkbox {...register('authors')} value="Author 1" /> Author 1
          </label>
          <label>
            <Checkbox {...register('authors')} value="Author 2" /> Author 2
          </label>
          {/* Adicione mais opções conforme necessário */}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Genres
        </label>
        {/* <ComboboxDemo /> */}
        <Controller
          name="genres"
          control={control}
          render={({ field }) => <MultiSelect field={field} />}
        />
      </div>

      <Button
        type="submit"
        className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
      >
        Submit
      </Button>
    </form>
  );
};

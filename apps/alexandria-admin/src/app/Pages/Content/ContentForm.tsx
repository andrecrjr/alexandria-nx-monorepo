import { toast } from '@alexandria/shadcn-ui/components/ui/use-toast';
import { useForm } from 'react-hook-form';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Button, Checkbox } from '@alexandria/shadcn-ui';
import request from '../../services';
import { useNavigate } from 'react-router-dom';
import { CreateContentSchemaDTO } from '@alexandria/shared-dto-api/content/formSchema';
import { GenericInput } from '../../molecules/Form/GenericInput';
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
    formState: { errors }
  } = useForm<CreateContentSchemaDTO>({
    resolver: resolver,
    defaultValues: { ...initialValues }
  });
  const goTo = useNavigate();

  async function onSubmit(data: CreateContentSchemaDTO) {
    try {
      await request(`${apiEndpoint}${initialValues ? `/${editId}` : ''}`, {
        method: initialValues ? 'PATCH' : 'POST',
        data: {
          title: data.title,
          description: data.description
        }
      });
      toast({
        title: `You ${editId ? 'updated' : 'submitted'} the following Genre:`,
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(data.title, null)}
            </code>
          </pre>
        )
      });
      goTo(`/${apiEndpoint}`);
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
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          {...register('title', { required: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.title && (
          <span className="text-red-500">This field is required</span>
        )}
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
          Content Type ID
        </label>
        <input
          type="number"
          {...register('contentTypeId', { required: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.contentTypeId && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Number of Pages
        </label>
        <input
          type="number"
          {...register('numberPages', { required: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.numberPages && (
          <span className="text-red-500">This field is required</span>
        )}
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
        <label className="block text-sm font-medium text-gray-700">ISBN</label>
        <input
          type="text"
          {...register('isbn', { required: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.isbn && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Created By ID
        </label>
        <input
          type="number"
          {...register('createdById', { required: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.createdById && (
          <span className="text-red-500">This field is required</span>
        )}
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
        <div className="flex space-x-4">
          <label>
            <Checkbox {...register('genres')} value="Genre 1" /> Genre 1
          </label>
          <label>
            <Checkbox {...register('genres')} value="Genre 2" /> Genre 2
          </label>
          {/* Adicione mais opções conforme necessário */}
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

import { toast } from '@alexandria/shadcn-ui/components/ui/use-toast';
import { useForm } from 'react-hook-form';
import { CreateGenreContentDtoSchema } from '@alexandria/shared-dto-api/genre-content/formSchema';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Button, Input, Label } from '@alexandria/shadcn-ui';
import request from '../../services';
import { useNavigate } from 'react-router-dom';
const resolver = classValidatorResolver(CreateGenreContentDtoSchema);

type Props = {
  initialValues?: CreateGenreContentDtoSchema;
  editId?: string;
};

const apiEndpoint = 'genre-content';

export const GenreForm = ({ initialValues, editId }: Props) => {
  const { handleSubmit, register } = useForm<{ name: string }>({
    resolver: resolver,
    defaultValues: { ...initialValues }
  });
  const goTo = useNavigate();

  async function onSubmit(data: { name: string }) {
    try {
      await request(`${apiEndpoint}${initialValues ? `/${editId}` : ''}`, {
        method: initialValues ? 'PATCH' : 'POST',
        data: { name: data.name }
      });
      toast({
        title: `You ${editId ? 'updated' : 'submitted'} the following Genre:`,
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(data.name, null)}
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
    <div
      className="preview flex justify-center w- mx-auto mt-16 ring-offset-background 
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>{editId ? 'Update' : 'Submit new'} Genre:</Label>
        <Input {...register('name')} />
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

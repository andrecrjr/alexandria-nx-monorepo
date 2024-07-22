import { toast } from '@alexandria/shadcn-ui/components/ui/use-toast';
import { useForm } from 'react-hook-form';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Button } from '@alexandria/shadcn-ui';
import request from '../../services';
import { useNavigate } from 'react-router-dom';
import { CreateContentTypeSchemaDTO } from '@alexandria/shared-dto-api/content-type/formSchema';
import { GenericInput } from '../../molecules/Form/GenericInput';
const resolver = classValidatorResolver(CreateContentTypeSchemaDTO);

type Props = {
  initialValues?: CreateContentTypeSchemaDTO;
  editId?: string;
};

const apiEndpoint = 'contenttype';

export const ContentTypeForm = ({ initialValues, editId }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<CreateContentTypeSchemaDTO>({
    resolver: resolver,
    defaultValues: { ...initialValues }
  });
  const goTo = useNavigate();

  async function onSubmit(data: CreateContentTypeSchemaDTO) {
    try {
      await request(`${apiEndpoint}${initialValues ? `/${editId}` : ''}`, {
        method: initialValues ? 'PATCH' : 'POST',
        data: {
          title: data.title,
          description: data.description,
          statusTracker: data.statusTrackerId || 1
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
    <div
      className="preview justify-center w- mx-auto mt-16 ring-offset-background 
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md"
    >
      <h2>{editId ? 'Update' : 'Submit new'} Content Type *:</h2>
      <form className="grid gap-3 mt-6" onSubmit={handleSubmit(onSubmit)}>
        <GenericInput
          register={register('title')}
          errors={errors['title']}
          label={"Content Type's title:"}
        />
        <GenericInput
          register={register('description')}
          errors={errors['description']}
          label={"Content Type's description:"}
        />
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

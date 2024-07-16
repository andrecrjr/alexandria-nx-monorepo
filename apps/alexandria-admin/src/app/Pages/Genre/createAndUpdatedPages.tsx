import { GenreForm } from './GenreForm';
import { useLoaderData, useParams } from 'react-router-dom';
import { GenreContentDTO } from '@alexandria/shared-dto-api/genre-content/formSchema';

export const CreatePage = () => {
  return <GenreForm />;
};

export const EditPage = () => {
  const { id } = useParams();
  const { data } = useLoaderData() as { data: GenreContentDTO };

  return <GenreForm initialValues={data} editId={id} />;
};

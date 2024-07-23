import { useLoaderData, useParams } from 'react-router-dom';
import { ContentDTO } from '@alexandria/shared-dto-api/content/formSchema';
import { ContentForm } from './ContentForm';

export const CreatePage = () => {
  return <ContentForm />;
};

export const EditPage = () => {
  const { id } = useParams();
  const { data } = useLoaderData() as { data: ContentDTO };

  return <ContentForm initialValues={data} editId={id} />;
};

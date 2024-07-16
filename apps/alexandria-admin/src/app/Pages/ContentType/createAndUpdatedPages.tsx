import { ContentTypeForm } from './ContentTypeForm';
import { useLoaderData, useParams } from 'react-router-dom';
import { CreateContentTypeSchemaDTO } from '@alexandria/shared-dto-api/content-type/formSchema';

export const CreatePage = () => {
  return <ContentTypeForm />;
};

export const EditPage = () => {
  const { id } = useParams();
  const { data } = useLoaderData() as { data: CreateContentTypeSchemaDTO };

  return <ContentTypeForm initialValues={data} editId={id} />;
};

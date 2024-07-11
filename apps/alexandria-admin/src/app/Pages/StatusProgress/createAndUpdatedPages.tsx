import { StatusTrackerDto } from '@alexandria/shared-dto-api/status-tracker/formSchema';
import { StatusTrackForm } from './StatusTrackForm';
import { useLoaderData, useParams } from 'react-router-dom';

export const CreatePage = () => {
  return <StatusTrackForm />;
};

export const EditPage = () => {
  const { id } = useParams();
  const { data } = useLoaderData() as { data: StatusTrackerDto };

  const valueUpdated = data.statusHistory.map((item) => ({
    id: `${Math.random() * 100}`,
    text: item
  }));

  return <StatusTrackForm initialValues={valueUpdated} editId={id} />;
};

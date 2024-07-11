import { PaginationComponent } from '../../molecules/Pagination';
import { useLoaderData } from 'react-router-dom';
import { StatusTrackerDto } from '@alexandria/shared-dto-api/status-tracker/formSchema';
import { ListTable } from '../../molecules/Table';
import { useAdminButtons } from '../../hooks';

const columns = [{ key: 'statusHistory', label: 'Status Progress' }];

const ListOptions = {
  name: 'Status Track',
  apiEndpoint: 'status-tracker'
};

export const ListPage = () => {
  const { data } = useLoaderData() as { data: StatusTrackerDto[] };
  const action = useAdminButtons(ListOptions.apiEndpoint, 'statusHistory');

  return (
    <div className="flex-1 mx-6 mt-6">
      <ListTable
        columns={columns}
        controllerActions={action}
        data={data}
        listOptions={ListOptions}
      />
      <PaginationComponent />
    </div>
  );
};

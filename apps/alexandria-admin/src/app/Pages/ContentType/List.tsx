import { PaginationComponent } from '../../molecules/Pagination';
import { useLoaderData } from 'react-router-dom';
import { ListTable } from '../../molecules/Table';
import { useAdminButtons } from '../../hooks';
import { ContentTypeDTO } from '@alexandria/shared-dto-api/content-type/formSchema';

const ListOptions = {
  name: 'Content Type',
  apiEndpoint: 'contenttype',
  apiColumns: [{ key: 'title', label: 'Content Type Name' }]
};

export const ListPage = () => {
  const { data } = useLoaderData() as { data: ContentTypeDTO[] };
  const action = useAdminButtons(ListOptions.apiEndpoint, 'title');

  return (
    <div className="flex-1 mx-6 mt-6">
      <ListTable
        columns={ListOptions.apiColumns}
        controllerActions={action}
        data={data}
        listOptions={ListOptions}
      />
      <PaginationComponent />
    </div>
  );
};

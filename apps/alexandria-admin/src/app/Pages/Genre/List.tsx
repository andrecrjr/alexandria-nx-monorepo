import { PaginationComponent } from '../../molecules/Pagination';
import { useLoaderData } from 'react-router-dom';
import { GenreContentDTO } from '@alexandria/shared-dto-api/genre-content/formSchema';
import { ListTable } from '../../molecules/Table';
import { useAdminButtons } from '../../hooks';

const columns = [{ key: 'name', label: 'Genre Content Name' }];

const ListOptions = {
  name: 'Genre',
  apiEndpoint: 'genre-content'
};

export const ListPage = () => {
  const { data } = useLoaderData() as { data: GenreContentDTO[] };
  console.log(data);
  const action = useAdminButtons(ListOptions.apiEndpoint, 'name');

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

import React from 'react';
import { PaginationComponent } from '../../molecules/Pagination';
// import { ListTable } from './ListTable';
import { useLoaderData } from 'react-router-dom';
import { StatusTrackerDto } from '@alexandria/shared-dto-api/status-tracker/formSchema';
import { ListTable } from '../../molecules/Table';
import { CustomActions } from '../../molecules/Table/customActions';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'statusHistory', label: 'Name' }
];

const ListOptions = {
  name: 'Status Track'
};

export const ListPage = () => {
  const { data } = useLoaderData() as { data: StatusTrackerDto[] };
  return (
    <div className="flex-1 mx-6 mt-6">
      <ListTable
        columns={columns}
        actions={CustomActions}
        data={data}
        listOptions={ListOptions}
      />
      <PaginationComponent />
    </div>
  );
};

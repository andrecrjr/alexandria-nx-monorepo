import React from 'react';
import { PaginationComponent } from '../../molecules/Pagination';
import { ListTable } from './ListTable';
import { useLoaderData } from 'react-router-dom';
import { StatusTrackerDto } from '@alexandria/shared-dto-api/status-tracker/formSchema';

export const ListPage = () => {
  const { data } = useLoaderData() as { data: StatusTrackerDto[] };
  return (
    <div className="flex-1 mx-6 mt-6">
      <ListTable data={data} />
      <PaginationComponent />
    </div>
  );
};

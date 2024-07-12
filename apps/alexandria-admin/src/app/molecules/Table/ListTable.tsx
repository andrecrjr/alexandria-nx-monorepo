import { PlusIcon, TableHead } from '@alexandria/shadcn-ui';
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Button
} from '@alexandria/shadcn-ui';
import { Link } from 'react-router-dom';
import { ActionsButtonAdmin } from '../../types/ActionsList';
import { CustomActions } from './ControllerAction';

interface ListTableDataProps<T> {
  data: T[];
  columns: { key: string | object; label: string }[];
  controllerActions?: ActionsButtonAdmin<T>;
  detailLinkKey?: string;
  listOptions: { name: string };
  detailLinkPath?: (item: T) => string;
}

const ListTable = <T,>({
  data,
  columns,
  controllerActions,
  detailLinkKey,
  detailLinkPath,
  listOptions,
  ...rest
}: ListTableDataProps<T>) => {
  return (
    <div className="border shadow-sm rounded-lg">
      <div className="flex items-center justify-between border-b bg-muted/40 px-6 py-4">
        <h1 className="text-lg font-semibold">
          {listOptions.name}'s Management
        </h1>
        <Link to="create">
          <Button>
            <PlusIcon className="h-4 w-4 mr-2" />
            Add New
          </Button>
        </Link>
      </div>
      <Table {...rest}>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key as string}>{column.label}</TableHead>
            ))}
            {!!controllerActions && <TableHead>Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data &&
            data.map((item, index) => (
              <TableRow key={(item['id' as keyof T] as string) || index}>
                {columns.map((column) => (
                  <TableCell key={column.key as string}>
                    {typeof item[column.key as keyof T] === 'object' ? (
                      <code>
                        {JSON.stringify(item[column.key as keyof T], null, 2)}
                      </code> // Handle object data
                    ) : (
                      (item[column.key as keyof T] as string)
                    )}
                  </TableCell>
                ))}
                {!!controllerActions && (
                  <TableCell>
                    {<CustomActions actions={controllerActions} item={item} />}
                  </TableCell>
                )}
                {detailLinkKey && detailLinkPath && (
                  <TableCell>
                    <Link
                      to={`
                        ${detailLinkPath(item)}`}
                    >
                      View Details
                    </Link>
                  </TableCell>
                )}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ListTable;

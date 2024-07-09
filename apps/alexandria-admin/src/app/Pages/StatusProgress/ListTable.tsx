import {
  Button,
  DropdownMenu,
  Table,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  MoveHorizontalIcon,
  PlusIcon,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@alexandria/shadcn-ui';
import { StatusTrackerDto } from '@alexandria/shared-dto-api/status-tracker/formSchema';
import { useToast } from '@alexandria/shadcn-ui/components/ui/use-toast';
import { Link } from 'react-router-dom';

type Props = {
  data?: StatusTrackerDto[];
};

export const ListTable = ({ data }: Props) => {
  const { toast } = useToast();
  return (
    <div className="border shadow-sm rounded-lg">
      <div className="flex items-center justify-between border-b bg-muted/40 px-6 py-4">
        <h1 className="text-lg font-semibold">Status Tracking</h1>
        <Link to="create">
          <Button>
            <PlusIcon className="h-4 w-4 mr-2" />
            Add Status Tracking
          </Button>
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Status</TableHead>
            <TableHead>Author</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data &&
            data?.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className="font-medium">
                    {JSON.stringify(item.statusHistory)}
                  </div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button variant="ghost" size="icon">
                        <MoveHorizontalIcon className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Link to={`edit/${item.id}`}>Edit</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={async () => {
                          toast({
                            title: `Delete Status Track: ${item.statusHistory}`
                          });
                        }}
                      >
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

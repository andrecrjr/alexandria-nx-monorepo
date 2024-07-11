import {
  Button,
  DropdownMenu,
  DropdownMenuItem,
  MoveHorizontalIcon
} from '@alexandria/shadcn-ui';
import { toast } from '@alexandria/shadcn-ui/components/ui/use-toast';
import {
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@radix-ui/react-dropdown-menu';
import { Link, useNavigate } from 'react-router-dom';

export const CustomActions = (item: any) => {
  const goTo = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" size="icon">
          <MoveHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Actions</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="cursor-pointer">
          <Link to={`edit/${item.id}`}>Edit</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            toast({
              title: `Delete Status Track: ${item.statusHistory}`
            });
            goTo(`delete/${item.id}`);
          }}
          className="cursor-pointer"
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

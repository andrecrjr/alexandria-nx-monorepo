import {
  Button,
  DropdownMenu,
  DropdownMenuItem,
  MoveHorizontalIcon,
  DropdownMenuTrigger,
  DropdownMenuContent
} from '@alexandria/shadcn-ui';
import { toast } from '@alexandria/shadcn-ui/components/ui/use-toast';
import { Link, useNavigate } from 'react-router-dom';

export const CustomActions = <T,>(item: T) => {
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
          <Link to={`edit/${item['id' as keyof T]}`}>Edit</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            toast({
              title: `Delete Status Track: ${item['statusHistory' as keyof T]}`
            });
            goTo(`delete/${item['statusHistory' as keyof T]}`);
          }}
          className="cursor-pointer"
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

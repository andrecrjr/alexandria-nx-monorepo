import {
  Button,
  DropdownMenu,
  DropdownMenuItem,
  MoveHorizontalIcon,
  DropdownMenuTrigger,
  DropdownMenuContent
} from '@alexandria/shadcn-ui';

import { Link } from 'react-router-dom';
import { CustomActionsProps } from '../../types/ActionsList';

export const CustomActions = <T,>({ item, actions }: CustomActionsProps<T>) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" size="icon">
          <MoveHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Actions</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {actions.map((action, index) => (
          <DropdownMenuItem
            key={index}
            onClick={
              action.type === 'button'
                ? () => {
                    if (action.action) {
                      action.action(item);
                    }
                  }
                : undefined
            }
            className="cursor-pointer"
          >
            {action.type === 'link' ? (
              <Link to={action.linkPath ? action.linkPath(item) : ''}>
                {action.label}
              </Link>
            ) : (
              action.label
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

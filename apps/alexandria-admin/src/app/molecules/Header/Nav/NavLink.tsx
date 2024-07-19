import { Link } from 'react-router-dom';

export const NavLink = ({
  to,
  icon: Icon,
  label
}: {
  to?: string;
  icon?: React.ElementType;
  label?: string;
}) => {
  if (to === 'login') {
    return null;
  }
  return (
    <Link
      to={to || ''}
      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
    >
      {Icon && <Icon className="h-4 w-4" />}
      <span>{label}</span>
    </Link>
  );
};

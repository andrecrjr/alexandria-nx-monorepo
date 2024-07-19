import { appRoutes } from '../../../../Routes';
import { Sidebar } from './Sidebar';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';
import { extractItemsWithMenuName } from '../../../utils';

const Aside = () => {
  const navItems = extractItemsWithMenuName(appRoutes);
  return (
    <Sidebar>
      <NavSection>
        {navItems.map((navLink) => {
          return (
            <NavLink
              to={navLink.path}
              icon={navLink.componentIcon}
              label={navLink?.menuName}
            />
          );
        })}
      </NavSection>
    </Sidebar>
  );
};

export default Aside;

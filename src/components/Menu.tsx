import { MenuProps } from "../interfaces/MenuProps";
import MenuItem from "./MenuItem";
import '../pages/css/Menu.module.css'

  
const Menu: React.FC<MenuProps> = ({ items }) => {
    return (
      <div className="menu">
        {items.map((item) => (
          <MenuItem key={item.path} name={item.name} type={item.type} path={item.path} />
        ))}
      </div>
    );
  };

  export default Menu;

  
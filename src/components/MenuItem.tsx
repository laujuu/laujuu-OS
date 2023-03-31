import { MenuItemProps } from "../interfaces/MenuItemProps";
import styles from '../pages/css/Menu.module.css'
import folder from '../assets/PinkFolder.png'
import archive from '../assets/TextEdit.png'
import contact from '../assets/Mail.png'

const MenuItem: React.FC<MenuItemProps> = ({ name, type, path }) => {

    let itemClass = '';
  let icon = null;

  if (type === 'folder') {
    itemClass = styles.folder;
    icon = folder;
  } else if (type === 'file') {
    itemClass = styles.file;
    icon = archive;
  } else if (type === 'contact') {
    itemClass = styles.contact;
    icon = contact;
  }

  return (
    <div className={styles.item}>
      <div className={ itemClass }>
        <img src={ icon ? icon : undefined } alt={name} />
        {name}
      </div>
    </div>
  );
};
  
  export default MenuItem;
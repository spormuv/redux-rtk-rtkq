import { BsFillBagHeartFill } from 'react-icons/bs';
import { useFavorites } from '../../hooks/useFavorites';
import styles from './Header.module.css';

function Header() {
  const { favorites } = useFavorites();

  return (
    <header className={styles.header}>
      <BsFillBagHeartFill fontSize={20} />
      <span>{favorites.length}</span>
    </header>
  );
}

export default Header;

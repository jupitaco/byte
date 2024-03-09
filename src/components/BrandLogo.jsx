import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';

const BrandLogo = () => {
  return (
    <Link to='/'>
      <figure>
        {' '}
        <img src={Logo} alt='Byte Logo' />
      </figure>
    </Link>
  );
};

export default BrandLogo;

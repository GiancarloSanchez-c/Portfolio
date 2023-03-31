import { Navbar } from './Navbar';
import logo from '../assets/img/logo.png';

export const Header = () => {
  return (
    <div className='Header'>
      <div className='Wrapper'>
        <img src={logo} alt='Logo' loading='lazy' className='Header-img' />
        <Navbar />
      </div>
    </div>
  )
}

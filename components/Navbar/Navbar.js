import pageLogo from '../../assets/icons/pagelogo.svg'
import Image from 'next/image'


const Navbar = () => {
  return ( 
    // <nav className="flex place-items-center absolute w-full top-0 z-50" aria-label="Primary Navigation">
    <nav aria-label="Primary Navigation">
      <div className="logo w-32 sm:w-48 lg:w-56 focus:outline-none focus-visible:ring-4 ring-accent">
        <a href="/" aria-label="Go Home" className=''>
          <Image
            src={pageLogo}
            alt="profile logo" 
          />
        </a>
      </div>
      <ul className="nav__menu">
        <li className="nav__menu__item">
          <a href="#about" className="p-2 focus:outline-none focus-visible:ring-2 ring-accent rounded-full transition-shadow">About</a>
        </li>
        <li className="nav__menu__item">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="nav__menu__item">
          <a href="#contact">Contact</a>
        </li>
        <li className="nav__menu__item">
          <button>Resume</button>
        </li>
      </ul>
    </nav>
   );
}
 
export default Navbar;
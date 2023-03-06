import pageLogo from '../../assets/icons/pagelogo.svg'
import Image from 'next/image'
import Link from 'next/link';


const Navbar = () => {
  return ( 
    // <nav className="flex place-items-center absolute w-full top-0 z-50" aria-label="Primary Navigation">
    <nav aria-label="Primary Navigation">
      <div className="logo w-32 sm:w-48 lg:w-56 focus:outline-none focus-visible:ring-4 ring-accent">

        <Image
          src={pageLogo}
          alt="profile logo" 
        />
      </div>
      <ul className="nav__menu">
        <li className="nav__menu__item lg">
          <a href="#about" className="p-2 focus:outline-none focus-visible:ring-2 ring-accent rounded-full transition-shadow">About</a>
        </li>
        <li className="nav__menu__item lg">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="nav__menu__item lg">
          <a href="#contact">Contact</a>
        </li>
        <li className="nav__menu__item lg">
          <a href="https://drive.google.com/file/d/1cZKVCp4EzfN0Eo0i1RYSQtazJxAs753x/view?usp=share_link" target="_blank" rel="noreferrer">
            <button>Resume</button>
          </a>
        </li>
        <li className="nav__menu__item sm">
          <a href="https://drive.google.com/file/d/1cZKVCp4EzfN0Eo0i1RYSQtazJxAs753x/view?usp=share_link" target="_blank" rel="noreferrer">
            <button>Resume</button>
          </a>
        </li>
      </ul>
    </nav>
   );
}
 
export default Navbar;
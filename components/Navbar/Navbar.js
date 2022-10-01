const Navbar = () => {
  return ( 
    <nav>
      <div className="logo">
        <h1>Lani's Logo</h1>
      </div>
      <div>
        <a href="#">About</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
        <a href="#">
          <button>Resume</button>
        </a>
      </div>
    </nav>
   );
}
 
export default Navbar;
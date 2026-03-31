const NavBar = () => {
    return (
      <div className="navbar px-25">
        <div className="navbar-start">
          <div className="flex items-center gap-1 font-bold text-xl">
            <h2 className="text-3xl font-bold text-purple-600">DigiTools</h2>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-3 px-1 text-sm">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <a className="">🛒 Login</a>
          <button className="btn btn-primary rounded-full">Get Started</button>
        </div>
      </div>
    );
  };
  
  export default NavBar;
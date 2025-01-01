// import Hero from "./Hero";


// components/NavBar.js
const NavBar = ({ handleNavClick }) => {
    return (
      <div className=" text-white p-8">
        {/* <div className="text-center mb-8">
          <Hero/>
        </div> */}
        <nav>
          <ul>
            <li>
              <button
                onClick={() => handleNavClick("about")}
                className="py-1 px-2 text-lg"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("projects")}
                className="py-1 px-2 text-lg"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("contact")}
                className="py-1 px-2 text-lg"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default NavBar;
  
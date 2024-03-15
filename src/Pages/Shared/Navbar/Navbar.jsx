import { NavLink } from "react-router-dom";

const Navbar = () => {
    const link = <>
        <NavLink><li>1</li></NavLink>
        <NavLink><li>2</li></NavLink>
        <NavLink><li>3</li></NavLink>
    </>
    return (
        <div className="navbar bg-[#f65606] text-white py-5">
          <div className="navbar-start">
            <img className="h-12 w-32" src="//icms-image.slatic.net/images/ims-web/3ac46ea5-a376-41cc-981f-21fa690468c0.png" alt="logo" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {link}
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
    );
};

export default Navbar;
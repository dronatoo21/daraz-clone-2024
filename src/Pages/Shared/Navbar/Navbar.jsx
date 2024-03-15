import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar flex bg-[#f65606] text-white pt-7">
          <div className="container mx-auto">
            <div className="absolute top-0 text-sm">
              <div className="flex gap-3">
                <Link to="#"><p className="">Become a Seller</p></Link>
                <Link to="#"><p className="">Daraz Donates</p></Link>
                <div className="dropdown dropdown-hover text-black">
                  <div tabIndex={0} role="button" className="text-white">Help & Support</div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row justify-between">
              <div>
                <img className="h-12 w-32" src="//icms-image.slatic.net/images/ims-web/3ac46ea5-a376-41cc-981f-21fa690468c0.png" alt="logo" />
              </div>
              <div>
                <h1>-----------------------</h1>
              </div>
              <div>
                <a className="btn">Button</a>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Navbar;
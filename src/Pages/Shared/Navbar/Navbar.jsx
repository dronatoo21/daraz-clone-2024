import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar flex bg-[#f65606] text-white">
          <div className="container flex flex-col mx-auto">
            <div className="flex justify-between w-full top-0 text-sm">
              <div className="flex gap-3 -mt-2 mb-2">
                <Link to="#"><p className=" text-[12px]">Become a Seller</p></Link>
                <Link to="#"><p className=" text-[12px]">Daraz Donates</p></Link>
                <div className="dropdown dropdown-hover text-black">
                  <div tabIndex={0} role="button" className="text-white text-[12px]">Help & Support</div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                  </ul>
                </div>
              </div>
              <div className="-mt-2 mb-2">
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="flex items-center gap-2 glass bg-transparent rounded-lg p-1"><img className="w-5" src="//img.alicdn.com/imgextra/i1/O1CN01Ie2YnK1JmZ1mL3fY5_!!6000000001071-2-tps-60-60.png" alt="" />Save More on App</div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu absolute -ml-[136px] mt-2 p-2 shadow bg-base-100 rounded-box w-72">
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
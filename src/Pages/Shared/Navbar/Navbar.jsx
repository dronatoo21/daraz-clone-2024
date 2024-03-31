import { Link, NavLink } from "react-router-dom";
import { FaBox, FaCartShopping, FaRegUser} from 'react-icons/fa6';
import { FaMoon, FaSun} from 'react-icons/fa';
import { GrUserPolice } from "react-icons/gr";
import { TbMessages, TbTruckDelivery } from "react-icons/tb";
import { SiContactlesspayment } from "react-icons/si";
import { AiTwotoneDollar } from "react-icons/ai";
import { MdOutlineSecurity } from "react-icons/md";

const Navbar = () => {
    return (
        <div className="navbar flex bg-[#f65606] text-white">
          <div className="container flex flex-col mx-auto">
            <div className="flex justify-between w-full top-0 text-sm">
              <div className="flex gap-3 -mt-2 mb-2">
                <Link to="#"><p className="hover:text-gray-800 text-[12px]">Become a Seller</p></Link>
                <Link to="#"><p className="hover:text-gray-800 text-[12px]">Daraz Donates</p></Link>
                <div className="dropdown dropdown-hover text-black">
                  <div tabIndex={0} role="button" className="text-white hover:text-gray-800 text-[12px]">Help & Support</div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 -ml-[150px] shadow bg-base-100 rounded-box w-96">
                    <NavLink to="#" className="flex items-center gap-4 hover:text-[#f65606] hover:underline rounded-xl h-10 p-1"><GrUserPolice className="text-xl"/><li>Help Center</li></NavLink>
                    <NavLink to="#" className="flex items-center gap-4 hover:text-[#f65606] hover:underline rounded-xl h-10 p-1"><TbMessages className="text-xl"/><li>Chat With Us</li></NavLink>
                    <NavLink to="#" className="flex items-center gap-4 hover:text-[#f65606] hover:underline rounded-xl h-10 p-1"><TbTruckDelivery className="text-xl"/><li>Shipping & Delivery</li></NavLink>
                    <NavLink to="#" className="flex items-center gap-4 hover:text-[#f65606] hover:underline rounded-xl h-10 p-1"><FaBox className="text-xl"/><li>Order</li></NavLink>
                    <NavLink to="#" className="flex items-center gap-4 hover:text-[#f65606] hover:underline rounded-xl h-10 p-1"><SiContactlesspayment className="text-xl"/><li>Payment</li></NavLink>
                    <NavLink to="#" className="flex items-center gap-4 hover:text-[#f65606] hover:underline rounded-xl h-10 p-1"><AiTwotoneDollar/><li>Returns & Refunds</li></NavLink>
                    <NavLink to="#" className="flex items-center gap-4 hover:text-[#f65606] hover:underline rounded-xl h-10 p-1"><MdOutlineSecurity className="text-xl"/><li>CCMS - Central Complain Management System</li></NavLink>
                  </ul>
                </div>
              </div>
              <div className="-mt-2 mb-2">
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="flex hover:text-gray-800 items-center gap-2 glass bg-transparent rounded-lg p-1"><img className="w-5" src="//img.alicdn.com/imgextra/i1/O1CN01Ie2YnK1JmZ1mL3fY5_!!6000000001071-2-tps-60-60.png" alt="" />Save More on App</div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu absolute -ml-[168px] mt-2 p-2 shadow bg-base-100 rounded-box w-80">
                    <li><img src="https://i.ibb.co/wz13Jgd/mobile-app.jpg" alt="app"/></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row justify-between items-center">
              <div className="w-[30%]">
                <img className="h-12 w-32" src="//icms-image.slatic.net/images/ims-web/3ac46ea5-a376-41cc-981f-21fa690468c0.png" alt="logo" />
              </div>
              <div className="w-[68%]">
                <input type="text" placeholder="Seacrch in Daraz" className="input input-md w-full text-gray-800" />
              </div>
              <div className="w-[30%] flex justify-between ml-10">
                <div className="flex gap-5">
                  <Link to="/login"><div className="flex items-center gap-2 hover:text-gray-800"><FaRegUser/> Login </div></Link>
                  |
                  <Link to="#"><div className="flex items-center gap-2 hover:text-gray-800">Sign Up</div></Link>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <label className="swap swap-rotate">
                        <input onClick="#" type="checkbox" />
                        {/* sun icon */}
                        <h1 className="swap-on fill-current"><FaSun className="text-[18px]"/></h1>
                        {/* moon icon */}
                        <h1 className="swap-off fill-current"><FaMoon className="text-[18px]"/></h1>
                    </label>
                  </div>
                </div>
                <Link to="#"><div className="flex items-center gap-2"><FaCartShopping/> Cart </div></Link>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Navbar;
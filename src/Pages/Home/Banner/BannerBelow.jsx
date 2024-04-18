import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
const BannerBelow = () => {
    return (
        <div>
            <div className="h-[200px]" style={{backgroundImage: "url(https://icms-image.slatic.net/images/ims-web/9264858a-dbb6-4886-8195-15a0d744df7c.gif)", backgroundPositionX: "-170px"}}>
            </div>
            <Link to="#">
                <div className="btn flex mt-1 justify-between px-11 py-2 rounded-lg items-center bg-[#fff1eb]">
                    <div className="flex items-center gap-2">
                        <img src="//icms-image.slatic.net/images/ims-web/55c642f0-250b-4515-9c8a-42cce3327098.png" alt="" />
                        <h1>Safe Payments</h1>
                    </div>
                    <div>|</div>
                    <div className="flex items-center gap-2">
                        <img src="//icms-image.slatic.net/images/ims-web/1b7e5ccb-89fc-4383-bc27-4586e82195be.png" alt="" />
                        <h1>NationWide Delivery</h1>
                    </div>
                    <div>|</div>
                    <div className="flex items-center gap-2">
                        <img src="//icms-image.slatic.net/images/ims-web/f2a7f550-3a25-478d-9879-e6aa419c7ebf.png" alt="" />
                        <h1>Free And Easy Return</h1>
                    </div>
                    <div>|</div>
                    <div className="flex items-center gap-2">
                        <img src="//icms-image.slatic.net/images/ims-web/05352646-9b19-4283-a7b1-dcb16736663e.png" alt="" />
                        <h1>Best Price Guranteed</h1>
                    </div>
                    <div>|</div>
                    <div className="flex items-center gap-2">
                        <img src="//icms-image.slatic.net/images/ims-web/781b5194-65f0-4ae5-b7a6-003bc717054f.png" alt="" />
                        <h1>100% Authentic Products</h1>
                    </div>
                    <div>|</div>
                    <div className="flex items-center gap-2">
                        <img src="//icms-image.slatic.net/images/ims-web/8faa565d-b52d-4e05-90e4-38466e764e84.png" alt="" />
                        <h1>Daraz Verified</h1>
                    </div>
                    <div><IoIosArrowForward/></div>
                </div>
            </Link>
        </div> 
    ); 
}; 

export default BannerBelow;
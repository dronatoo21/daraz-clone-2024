import Banner from "../Banner/Banner";
import BannerBelow from "../Banner/BannerBelow";
import FlashSale from "../FlashSale/FlashSale";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner/>
            <BannerBelow/>
            <FlashSale/>
        </div>
    );
};

export default Home;
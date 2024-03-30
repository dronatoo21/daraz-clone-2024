const FlashSale = () => {
    return (
        <div className="mt-5">
            <h1 className="text-2xl p-2">FlashSale</h1>
            <div>
                <div className="flex justify-between px-10 py-3 items-center bg-white"> 
                    <h1 className="text-orange-500">On Sale Now</h1>
                    <button className="btn bg-white text-orange-600">Shop More</button>
                </div>
                <hr />
                <div className="bg-white p-5">
                <div className="card w-[250px] card-compact bg-base-100 shadow-xl">
                  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                  </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default FlashSale;
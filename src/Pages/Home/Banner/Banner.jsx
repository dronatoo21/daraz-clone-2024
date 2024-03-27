const Banner = () => {
    return (
        <div className="flex justify-between m-3">
            <div className="text-center w-[28%] h-[400px] border-2">
                <h1>Aside</h1>
            </div>
            <div className="text-center w-[70%] h-[400px]">
                <div className="carousel w-full rounded-lg">
                  <div id="slide1" className="carousel-item relative h-[398px] w-full">
                    <img src="//icms-image.slatic.net/images/ims-web/dc653abd-b7a3-4fca-8763-ec643ca620df.jpg_1200x1200.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                      <a href="#slide6" className="btn btn-square h-[60px] text-white border-2 w-5 bg-transparent">❮</a> 
                      <a href="#slide2" className="btn btn-square h-[60px] text-white border-2 w-5 bg-transparent">❯</a>
                    </div>
                  </div> 
                  <div id="slide2" className="carousel-item relative w-full">
                    <img src="//icms-image.slatic.net/images/ims-web/0d1d9290-9b9e-4ae0-b1e3-311d31b81123.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                      <a href="#slide1" className="btn btn-square h-[60px] text-white border-2 w-5 bg-transparent">❮</a> 
                      <a href="#slide3" className="btn btn-square h-[60px] text-white border-2 w-5 bg-transparent">❯</a>
                    </div>
                  </div> 
                  <div id="slide3" className="carousel-item relative w-full">
                    <img src="//icms-image.slatic.net/images/ims-web/b39bad75-146f-459a-9932-9ff28c1b4d18.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                      <a href="#slide2" className="btn btn-square h-[60px] text-white border-2 w-5 bg-transparent">❮</a> 
                      <a href="#slide4" className="btn btn-square h-[60px] text-white border-2 w-5 bg-transparent">❯</a>
                    </div>
                  </div> 
                  <div id="slide4" className="carousel-item relative w-full">
                    <img src="//icms-image.slatic.net/images/ims-web/ca7de644-dcf2-4851-ab08-90c271fdc920.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                      <a href="#slide3" className="btn btn-square h-[60px] text-white border-2 w-5 bg-transparent">❮</a> 
                      <a href="#slide5" className="btn btn-square h-[60px] text-white border-2 w-5 bg-transparent">❯</a>
                    </div>
                  </div>
                  <div id="slide5" className="carousel-item relative w-full">
                    <img src="//icms-image.slatic.net/images/ims-web/2ffc6faf-df36-4e49-beed-1018b73bfe8c.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                      <a href="#slide4" className="btn btn-square h-[60px] text-white border-2 w-5 bg-transparent">❮</a> 
                      <a href="#slide6" className="btn btn-square h-[60px] text-white border-2 w-5 bg-transparent">❯</a>
                    </div>
                  </div>
                  <div id="slide6" className="carousel-item relative w-full">
                    <img src="//icms-image.slatic.net/images/ims-web/4601e3fc-db8f-4f5e-bb92-0cca631923af.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                      <a href="#slide5" className="btn btn-square h-[60px] text-white border-2 w-5 bg-transparent">❮</a> 
                      <a href="#slide1" className="btn btn-square h-[60px] text-white border-2 w-5 bg-transparent">❯</a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
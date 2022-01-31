import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://9to5toys.com/wp-content/uploads/sites/5/2020/03/amazon-prime-video-cinema.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="123213141"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Flass Bowl"
            price={239.0}
            rating={5}
            image="https://foodal.com/wp-content/uploads/2014/11/Kenwood-Titanium-Chef-Major-Stand-Mixer.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4783628"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={4}
            image="https://cdn.mos.cms.futurecdn.net/ViZRxC2UQx64qe9oXBKh48-1200-80.jpg"
          />
          <Product
            id="0549359"
            title="Amazon Echo (3rd Generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={3}
            image="https://www.bhphotovideo.com/images/images2500x2500/amazon_b07nftvp7p_echo_3rd_generation_charcoal_1512895.jpg"
          />
          <Product
            id="6438495"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={5}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1617067383000"
          />
        </div>
        <div className="home__row">
          <Product
            id="3405948"
            title="Samsung LC49RG90SSUXEN 49' LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 X 1440"
            price={1094.98}
            rating={4}
            image="https://i.pinimg.com/originals/61/aa/0f/61aa0fcfee6e7a7baa424ce99f30ad80.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

import { useState, useEffect } from "react";

// import components
import Header from "./Header";
import Footer from "./Footer";
import ContactBanner from "./ContactBanner";
import ProductTab1 from "./ProductTab1";
import ProductTab2 from "./ProductTab2";
import CallBtn from "./CallBtn";

import "../assets/css/product.css"

// handle active tab
function Product(){
    // scroll to top
    useEffect(() => {
            window.scrollTo(0, 0);
          }, []);

    const [activeTab, setActiveTab] = useState(1);
    const [isActive1, setisActive1] = useState(true);
    const [isActive2, setisActive2] = useState(false);

    function handleTabChange(){
        if(activeTab === 1){
            setActiveTab(2);
            setisActive1(false);
            setisActive2(true)
        }
        else if(activeTab === 2){
            setActiveTab(1);
            setisActive1(true);
            setisActive2(false);
        }
    }

    return(
        <div className="product">
            <Header active="5"/>
            <section className="product-wrapper app-item mt-114">
                <h3 className="home-section-title">Sản phẩm</h3>
                <nav className="product-nav">
                    <ul>
                        <li onClick={handleTabChange} className={isActive1 ? "nav-item active-item" : "nav-item"}>Cơm gà da giòn</li>
                        <li onClick={handleTabChange} className={isActive2 ? "nav-item active-item" : "nav-item"}>Bún bò huế</li>
                    </ul>
                </nav>
                {activeTab === 1 ? <ProductTab1 /> : <ProductTab2/> }
            </section>
            <ContactBanner />
            <CallBtn />
            <Footer />
        </div>
    )
}

export default Product;
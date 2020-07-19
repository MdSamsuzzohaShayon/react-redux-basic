import React, { useState } from 'react';
import './Cart.css';



const circle=(quantity)=>{
    return (
        <span className="circle">{quantity}</span>
    )
}

// MAKING A SIMPLE MENU
function Menu({quantity, addToCart}) {
    return (
        <div className="menu">
            <div className="items">
                <ul className="item-1">
                    <li><a href="#">Gift card</a></li>
                    <li><a href="#">Smart Home</a></li>
                    <li><a href="#">Electronics</a></li>
                    <li><a href="#">Fashion</a></li>
                </ul>
                <ul className="item-2">
                    <li><a href="#">Cart
                    <img src="../icon/shopping-cart.svg" width="20px" alt="" />
                    {addToCart == true? circle(quantity): null}
                    </a></li>
                    <li><a href="#"> <strong>En</strong> / বাংলা</a></li>
                </ul>
            </div>
        </div>
    )
}














function Cart() {
    // GENERAL PRICE
    let defaultGeneralPrice = 13;
    const [generalPrice, setGeneralPrice] = useState(defaultGeneralPrice);

    // QUANTITY
    const [quantity, setQuantaty] = useState(1);

    // DISCOUNT
    let dafaultDiscount = 5;
    // let defaultCouponDiscount = quantity * dafaultDiscount ;
    const [couponDiscount, setCouponDiscount] = useState(dafaultDiscount);
    console.log(couponDiscount);

    // TOTAL PRICE
    // let defaultTotalPrice = generalPrice * quantity - couponDiscount ;
    // console.log(defaultTotalPrice);
    const [totalPrice, setTotalPrice] = useState(generalPrice);

    const [addToCart, setAddToCart] = useState(false);
    console.log(`Add to cart button click ? ${addToCart}`);




    function incrementQuentaty(){
        // EVERYTIME WHEN CLICK PLUS BUTTON IT WILL INCREMENT BY ONE
        // AND TOTAL PRICE WILL BE CHANGE
        // PRICE * QUANITY = TOTAL 
        setQuantaty(prevQuantity=> prevQuantity+1);
        setTotalPrice(prevPrice=> prevPrice + generalPrice);
    }
    function decrementQuantity(){
        setQuantaty(prevQuantity=> prevQuantity-1);
        setTotalPrice(prevPrice=> prevPrice - generalPrice);
    }
    function usingCouponDiscount(e){
        e.preventDefault();
        console.log(e.target.value);
        if(e.target.value == 123){
            console.log('set total price and coupon discount');
            setCouponDiscount(prevDiscount => prevDiscount);
            setTotalPrice(prevPrice=> prevPrice - couponDiscount * quantity);
        }
    }




    function  handleClick(e){
        e.preventDefault();
        setAddToCart(prevAddToCart => prevAddToCart=true);
    }






    return (
        <div className="Cart">
            <Menu quantity={quantity} addToCart={addToCart} />
            <br />
            <br />
            <br />
            <div className="box">
                <div className="image">
                    <img src="https://www.univers-du-foot.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/i/ai0049_app_virtual_standard_transparent.png" alt="" />
                </div>
                <div className="detail">
                    <div className="title">FC Bayern München</div>
                    <div className="desc">
                        FC Bayern Munich First team squad First team squad Women's team The FC Bayern Women represent the club in the Bundesliga and Women's Champions League.
                    </div>
                </div>
                <div className="set-quan set-bg">
                    <div className="quantaty">Quantaty {quantity}</div>
                    <div className="btns">
                        <button className="btn" onClick={incrementQuentaty}>+</button>
                        <button className="btn" onClick={decrementQuantity}>-</button>
                    </div>
                </div>
                <div className="price">
                    <div className="gp">General price {generalPrice}$</div>
                    <div className="coupon set-bg">Use Coupon 
                        <form >
                            <input onChange={usingCouponDiscount} placeholder="Enter your coupon code" type="text"/>
                        </form>
                    </div>
                    <div className="total-price">Total Price {totalPrice}$</div>
                </div>
                <div className="add set-bg">
                    <button className="btn" onClick={handleClick} >Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;
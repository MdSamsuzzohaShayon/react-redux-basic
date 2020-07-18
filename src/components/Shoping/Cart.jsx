import React, { useState } from 'react';
import './Cart.css';


function menu() {
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
                    </a></li>
                    <li><a href="#"> <strong>En</strong> / বাংলা</a></li>
                </ul>
            </div>
        </div>
    )
}

function Cart() {
    return (
        <div className="Cart">
            {menu()}
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
                <div className="set-quan">
                    <div className="quantaty">Quantaty 1</div>
                    <div className="btns">
                        <button className="btn">+</button>
                        <button className="btn">-</button>
                    </div>
                </div>
                <div className="price">
                    <div className="gp">General price 13$</div>
                    <div className="coupon">Use Coupon 
                        <form >
                            <input placeholder="Enter your coupon code" type="text"/>
                        </form>
                    </div>
                    <div className="total-price">Total Price 13$</div>
                </div>
                <div className="add">
                    <button className="btn">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;
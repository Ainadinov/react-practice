import React, { useState } from "react"
import {FaShoppingCart} from "react-icons/fa";
import Order from "./order";

const showOrders= (props) =>{
    let summa = props.orders.reduce((acc,e)=>acc + Number(e.price),0)

    return(
        <div>
            {props.orders.map(el =>(
                <Order onDelete={props.onDelete} key={el.id} item={el}/>
            ))}
            <p className="summa">Сумма: {summa}$</p>
        </div>
    )
}

const showNoting= () =>{
    return(
        <div className="empty">
            <h2>Товаров Нет</h2>
        </div>
    )
}

export default function Header(props){
    let [cartOpen, setCartOpen] = useState(false)

    return(
        <header>
            <div>
                <span className='logo'> House Staff</span>
                <ul className="nav">
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                <FaShoppingCart onClick={()=> setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

                {cartOpen && (
                    <div className="shop-cart">
                        {props.orders.length > 0 ?
                        showOrders(props) : showNoting()}
                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    )
}
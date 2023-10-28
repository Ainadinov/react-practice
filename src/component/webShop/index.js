import Footer from './footer';
import Header from './header';
import Items from './items';
import './style.css';
import React from 'react';
import Chair from '../images/chair1.jpg'
import Categories from './categories';
import ShowFullItem from './ShowFullItem';

class WebShop extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: "Chair",
                    img: 'chair1.jpg',
                    desc: "lorem ipsum dolor sit amet, consectetur adipisicin.",
                    category: "Chair",
                    price: "49.99",
                },
                {
                    id: 2,
                    title: "Table",
                    img: 'chair1.jpg',
                    desc: "lorem ipsum dolor sit amet, consectetur adipisicin.",
                    category: "Table",
                    price: "49.99",
                },
                {
                    id: 3,
                    title: "Chair",
                    img: 'chair1.jpg',
                    desc: "lorem ipsum dolor sit amet, consectetur adipisicin.",
                    category: "Chair",
                    price: "49.99",
                },
                {
                    id: 4,
                    title: "Table",
                    img: 'chair1.jpg',
                    desc: "lorem ipsum dolor sit amet, consectetur adipisicin.",
                    category: "Table",
                    price: "49.99",
                },
                {
                    id: 5,
                    title: "Sofa",
                    img: 'chair1.jpg',
                    desc: "lorem ipsum dolor sit amet, consectetur adipisicin.",
                    category: "Sofa",
                    price: "49.99",
                },
                {    
                    id: 6,
                    title: "Sofa",
                    img: 'chair1.jpg',
                    desc: "lorem ipsum dolor sit amet, consectetur adipisicin.",
                    category: "Sofa",
                    price: "49.99",
                },
            ],
            showFullItem: false,
            fullItem: {},
        }

        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
    }
    
    render(){
        return(
            <div className='wrapper'>
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Categories chooseCategory={this.chooseCategory}/>
                <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
                {this.state.showFullItem && <ShowFullItem  onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
                <Footer/>
            </div>
        )
    }  

    onShowItem(item){
        this.setState({fullItem: item})
        this.setState({showFullItem: !this.state.showFullItem})
    }
    
    chooseCategory(category){
        if(category === "all"){
            this.setState({
                currentItems : this.state.items
            })
            return
        }

        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

    deleteOrder(id){
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

    addToOrder(item){
        let isInArray = false
        this.state.orders.forEach(el =>{
            if(el.id == item.id){
               isInArray = true 
            }
        })
        if(!isInArray)
            this.setState({orders: [...this.state.orders, item]})
    }
}

export default WebShop;
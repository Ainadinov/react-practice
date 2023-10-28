import React from "react";

class Categories extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            categories: [
                {
                    key: "all",
                    name: "All"
                },
                {
                    key: "Chair",
                    name: "Chair"
                },
                {
                    key: "Table",
                    name: "Table"
                },
                {
                    key: "Sofa",
                    name: "Sofa"
                },
            ]
        }
    }

    render(){
        return(
            <div className="categories">        
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={()=> this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories


import React from "react";
import schoolProducts from './schoolProducts'

function ProductComponent(props){
    return(
    <div>
        <h3>Name: {props.name}</h3>
        <h3>Price: {props.price}</h3>
    </div>
    )
}

export default ProductComponent
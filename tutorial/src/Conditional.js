import React from "react";

function Conditional(props) {

    return (
        <div>
            {props.isLoading ? <h1>Loading...</h1> : <h1>Hello World</h1>}
        </div>

    )
}

export default Conditional
import React from 'react'

function Jokes(props){
    return(
        <div>
            <h3 style={{display: !props.question && "none"}}>
                Question: {props.question}</h3>
            <h3>Answer: {props.punchline}</h3>
            <hr/>
        </div>
    )
}
export default Jokes
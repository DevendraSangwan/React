import React from 'react'


/* function Card(props){ 
 console.log(props.name)*/
function Card({username,btnText="visit me"}){
    {/* alsways give default value when making function */}
    {/* we you want then pass more arguments in Card function and also adjust your html componets according to variable (yes using curly bracket passing variable value) */}
    {/* if we want then pass a variable name like direct "{name}", then we not need to write props on anywhere ...means after this we written only name in curly brackets, not props.name .*/}
    // console.log("props",props)
    return(
        <>
        <div>Card</div>
        <div>{username}</div>
        <div>{btnText}</div>
        </>
    )
}
export default Card

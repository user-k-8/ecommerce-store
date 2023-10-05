import React from 'react'
import Stars from './Stars'


const BagItem = (props) => {
  
const [count, setCount] = React.useState(1); 
 
function plus(){
setCount(prevCount=>prevCount+1)
}

function minus(){
  setCount(prevCount=>prevCount-1)
}
return (
<div className='bag-item'>
    <div className='bag-item-left'>
        <img src={props.element.img} alt=''/>
    </div>
    <div className='bag-item-right'>
         <h1>{props.element.title}</h1>
         <h2>{props.element.detail}</h2>
         <p > They vary based on dimensions like granularity and scope.</p>
         <Stars/>
         <div className='price-quantity-container'>
              <div className='bag-item-price'>$ {props.element.price} x {props.element.quantity}</div>
              <div className='quantity'>
                    <span className='minus'
                     onClick={()=>{props.handleSubtractQuantity(props.element.id); minus()}}>-</span>
                    <span>{props.element.quantity}</span>
                    <span className='plus' onClick={()=>{props.handleAddQuantity(props.element.id); plus()}}>+</span>
             </div>
         </div>
    </div>
 </div>
  )
}

export default BagItem
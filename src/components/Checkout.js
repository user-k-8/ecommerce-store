import React from 'react'
import BagItem from './BagItem'
import { removeItem, addQuantity, subtractQuantity} from './actions/cartActions'
import {connect} from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'


const Checkout = (props) => {
   
   const navigate = useNavigate();
   const addressForm = props.addressFormData;
   const paymentForm = props.paymentFormData;

   const handleAddQuantity= (id)=>{
      props.addQuantity(id)
    }
  
    const handleSubtractQuantity = (id)=>{
      props.subtractQuantity(id);
    }

    const shipping = 6;

     let addedItems = props.items.map(item=>(
      <>
      <BagItem 
         handleAddQuantity={handleAddQuantity}
         handleSubtractQuantity={handleSubtractQuantity}
         element={item}/>
        <hr className='review-bag-h-line'/>
      </>
      ))

      const handleOrder =()=>{
            if(addressForm&& paymentForm){
               navigate('/confirmation')
            }
            else{
               alert('Please fill in address and payment method')
            }
      }

      const cardIcon = (<button type="button" class="btn btn-outline-dark card-icon">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-credit-card-fill" viewBox="0 0 16 16">
                                               <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z"/>
                                             </svg>
                                      </button>)
      const giftIcon= (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-gift-fill" viewBox="0 0 16 16">
                                       <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9H2.5z"/>
                                     </svg>)

  return (
    <section className='checkout-container' id='top'>
         <div className='order-details'>
            <div className='shipping-address'>
                <h1>SHIPPING ADDRESS</h1>
                <div className='address-container'>
                     <div className='address-details'>
                        <p>
                           {addressForm ? 
                           (<> {addressForm.user_name}<br/>
                           {addressForm.street_name}<br/>
                           {addressForm.city_name}, {addressForm.state_name}<br/>
                           {addressForm.country} </>):
                            (<span>No shipping address added</span>)}                                 
                        </p>
                     </div>                 
                     <Link to={{pathname:"/address", hash:"top"}}>
                        <div className='edit-button'>
                           <button className='btn btn-outline-dark'>Change</button>
                        </div>
                     </Link>  
                </div>
             </div>

             <div className='payment-method'>
                <h1>PAYMENT METHOD</h1>
                <div className='payment-container'>            
                     <div className='payment-details'>
                        <p>
                           {cardIcon} Card <span className='grey'>ending in 
                           {paymentForm? 
                           (<> {paymentForm.card_number.slice(12,16)}</>):
                            (<span> - No payment card added</span>)}                         
                           </span><br/>
                               { giftIcon} $0. 00 <span className='grey'>gift card balance</span><br/>
                            <div className='checkbox-container'>
                                <input type="checkbox" id="save" name="save" checked />
                                <label htmlFor="save" className='payment-form-label save-label billing-check'>Billing address same as shipping address</label>  
                            </div>
                              <br/>                 
                        </p>
                     </div>
                     <Link to={{pathname:"/addpayment", hash:"top"}}>
                        <div className='edit-button'>
                            <button className='btn btn-outline-dark'>Change</button>
                         </div>
                     </Link>              
                </div>
            </div>
            <div className='review-bag'>
                    <h1>REVIEW YOUR BAG</h1>              
                    {addedItems}            
            </div>
        </div>
         <div className='order-summary-container'>
            <div className='order-summary'>
                <h1>Order Summary</h1>
               <div className='summary-item'><span>Items: </span> <span>$ {props.total}</span></div>
               <div className='summary-item'><span>Shipping: </span> <span>$ 6</span></div>
               <div className='summary-item'><span>Estimated GST: </span> <span>$0.00</span></div>
               <div className='summary-item'><span>Gift Card: </span> <span>$0.00</span></div>
               <hr className='review-bag-h-line'/>
               <div className='summary-item-total'><span>Order Total: </span> <span>$  {props.total + shipping}</span></div>
               <hr className='review-bag-h-line'/>
               <button className='btn btn-dark order-button' onClick={handleOrder}>Place your order</button>
            </div>
            <div className='back-button-order-summary' >
                <button className='btn btn-outline-dark'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                       <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                    <Link to="/bag" className='link-text'><h4>Back </h4></Link>
                </button>
             </div>
         </div>
    </section>
  )
}

const mapStateToProps = (state)=>{

   return{
     items: state.addedItems,
     total: state.total,
     addressFormData: state.addressFormData,
     paymentFormData: state.paymentFormData
   }
 }
 
 const mapDispatchToProps = (dispatch)=>{
 
   return{
     removeItem: (id)=>{dispatch(removeItem(id))},
     addQuantity: (id)=>{dispatch(addQuantity(id))},
     subtractQuantity: (id)=>{dispatch(subtractQuantity(id))},
    
     
   }
 }


 
 export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
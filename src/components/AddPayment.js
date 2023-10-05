import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, connect} from 'react-redux'
import { HashLink as Link } from 'react-router-hash-link'

const AddPayment = (props) => {
    
    const dispatch =useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = React.useState( {
        cardholder_name:"",
       card_number:"",
       expiry_date:"",
       cvc:"",
        save:true
}); 

const selectCard = (card_number)=>{
    for(const item of props.paymentCards){
        if(item.card_number === card_number){
           var payFormData =item;
        }
    }
    dispatch({ type:  'UPDATE_PAYMENT_DATA', payload: payFormData });
    navigate('/checkout')
}

const cardIcon = (<button type="button" class="btn btn-outline-secondary card-icon">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-credit-card-fill" viewBox="0 0 16 16">
                                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z"/>
                                  </svg>
                                </button>)

const cardIconWhite = (<button type="button" class="btn btn-dark card-icon">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-credit-card-fill" viewBox="0 0 16 16">
                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z"/>
                                             </svg>
                                          </button>)

const dateIcon = (<button type="button" class="btn btn-outline-secondary card-icon">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar-date-fill" viewBox="0 0 16 16">
                                       <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z"/>
                                       <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z"/>
                                   </svg>
                                </button> )


const paymentInfo = props.paymentCards.map(item=>(
    <span onClick={()=>{selectCard(item.card_number)}} className='select-item'>{cardIcon} Card ending in {item.card_number.slice(12, 16)}</span>
));

const handleInputChange = event =>{
    const {name, value, type, checked} = event.target
    setForm({...form, [name]: type==='checkbox' ? checked : value})
}

const handleSubmit =event=>{
    event.preventDefault()

    if(form.card_number.length !==16){
        alert('Card number should contain 16 numbers')
    }
     else{
     const paymentFormData = form;
     dispatch({ type:  'UPDATE_PAYMENT_DATA', payload: paymentFormData });
     dispatch({ type:  'UPDATE_PAYMENT_CARDS', payload: paymentFormData });
     navigate('/checkout')
     } 
   }

  return (
<section className='add-payment' id='top'>
    <div className='select-card'>
             <h1>SELECT A CARD</h1>
             {paymentInfo.length>0 ?
             (<>{paymentInfo}</>) :
             (<span>No Card added yet</span>)}
    </div>

    <div className='add-card'>
         <h1>ADD A NEW CARD</h1>
         <form className='payment-form' onSubmit={handleSubmit}>
            <div className='card-details-container'>
                <label htmlFor="cardholder_name" className='payment-form-label'>Cardholder Name</label><br/>
                <div className='card-details-input'>
                    <input type="text" id="cardholder_name" name="cardholder_name" value={form.cardholder_name}  onChange={handleInputChange} required />
                </div>
            </div>
            <div className='card-details-container'>
                <label htmlFor="card_number" className='payment-form-label'>Card Number</label><br/>
                <div className='card-details-input'>
                   {cardIcon} <input type="number" id="card_number" minLength={16} placeholder=" Enter 16 numbers" name="card_number"  value={form.card_number}  onChange={handleInputChange} required/>
                </div>
            </div>
            <div className='card-date'>
             <div className='card-details-container'>
                <label htmlFor="expiry_date" className='payment-form-label'>Expiry Date</label><br/>
                <div className='card-details-date'>
                    {dateIcon}<input type="text" placeholder=' mm/yy'  name="expiry_date" value={form.expiry_date}  onChange={handleInputChange} required/>
                </div>
            </div>
            <div className='card-details-container'>
                <label htmlFor="cvc" className='payment-form-label'>CVC</label><br/>
                <div className='card-details-date'>
                    <input type="number" id="cvc" placeholder='123' name="cvc" minLength={3} maxLength={3} value={form.cvc}  onChange={handleInputChange} required/>
                </div>
            </div>
            </div>
            <div className='checkbox-container'>
                <input type="checkbox" id="save" name="save" checked={form.save} onChange={handleInputChange} />
                <label htmlFor="save" className='payment-form-label save-label'>Save this as your default payment method</label>        
            </div>
            <div className='save-button'>
                 <button type='submit' className='btn btn-dark'>{cardIconWhite} Add Payment Method</button>
            </div>
            <div className='add-payment-footer'>
               <Link to={{pathname:"/checkout", hash:"top"}} className='link-text' ><div>Back</div></Link>
               <div className='secure'>
                  <button type="button" class="btn btn-outline-success top-button">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                             <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                          </svg>
                    </button>
                    Secure connection
                </div>
            </div>
        </form>
    </div>
</section>
  )
}

const mapStateToProps = (state)=>{

    return{
      items: state.addedItems,
      total: state.total,
      addressFormData: state.addressFormData,
      paymentFormData: state.paymentFormData,
      paymentCards: state.paymentCards
    }
  }

  export default connect(mapStateToProps)(AddPayment)
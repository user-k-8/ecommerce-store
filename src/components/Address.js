import React from 'react'
import { useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { HashLink as Link } from 'react-router-hash-link'

const Address = () => {

    const dispatch =useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = React.useState( {
        user_name:"",
        city_name:"",
        street_name:"",
        state_name:"",
        country:"",
        save:true
}); 

const handleInputChange = event =>{

    const {name, value, type, checked} = event.target
    setForm({...form, [name]: type==='checkbox' ? checked : value})
}

const handleSubmit =event=>{
    event.preventDefault()
     const addressFormData = form;
     dispatch({ type:  'UPDATE_ADDRESS_DATA', payload: addressFormData });
     navigate('/checkout')
   }

  return (
<section className='add-address' id='top'>
    <div className='address-wrapper'>       
        <form className='address-form' onSubmit={handleSubmit}>
            <div className='address-details-container'>
                <label htmlFor="user_name" className='payment-form-label'>Shipping Name</label><br/>
                <div className='address-details-input'>
                    <input type="text" id="user_name" name="user_name" value={form.user_name}  onChange={handleInputChange} required/>
                </div>
            </div>
            <div className='address-details-container'>
                <label htmlFor="street_name" className='payment-form-label'>Street Address </label><br/>
                <div className='address-details-input'>
                    <input type="text" id="street_name" name="street_name" value={form.street_name}  onChange={handleInputChange} required/>
                </div>
            </div>
            <div className='address-details-container'>
                <label htmlFor="city_name" className='payment-form-label'>City</label><br/>
                <div className='address-details-input'>
                    <input type="text" id="city_name" name="city_name"  value={form.city_name}  onChange={handleInputChange} required />
                </div>
            </div>
            <div className='address-details-container'>
                <label htmlFor="state_name" className='payment-form-label'>State / Province</label><br/>
                <div className='address-details-input'>
                    <input type="text" id="state_name" name="state_name"  value={form.state_name}  onChange={handleInputChange} required/>
                </div>
            </div>
            <div className='address-details-container'>
                <label htmlFor="country" className='payment-form-label'>Country</label><br/>
                <div className='address-details-input'>
                    <input type="text" id="country" name="country"  value={form.country}  onChange={handleInputChange} required/>
                </div>
            </div>   
            <div className='checkbox-container'>
                <input type="checkbox" id="save" name="save"  checked={form.save} onChange={handleInputChange}/>
                <label htmlFor="save" className='payment-form-label save-label'>Save this as your default payment method</label>      
            </div>  
            <div className='save-button'>
                 <button type='submit' className='btn btn-dark'>Add Address</button>
            </div>
            <div className='add-payment-footer'>
              <Link to={{pathname:"/checkout", hash:"top"}} className='link-text' ><div>Back</div></Link>
                  <div className='secure'>
                  <button type="button" class="btn btn-outline-success top-button">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                             <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                          </svg>
                    </button>
                    Secure connection</div>
            </div>
        </form>
     </div>
</section>
  )
}

export default Address
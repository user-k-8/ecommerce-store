import React from 'react'
import { useNavigate} from 'react-router-dom'
import {useDispatch,connect} from 'react-redux'

const Confimation = () => {

  const dispatch =useDispatch();
  const navigate = useNavigate();

  const CleanUp = ()=>{
    dispatch({ type:  'CLEAR_CART', payload: [] });
     navigate('/products')
  }
  return (
  <div className='confirmation'>
      <div className='confirmation-box'>
        <h1>Thank you for shopping with us!</h1>
        <span>Your order will arrive in 5-7 days. Track your order at https: bit/order-track</span><br/>
        <button className='btn btn-dark btn-lg back-home-btn' onClick={CleanUp}>Home</button>
      </div>
  </div>
  )
}

const mapStateToProps = (state)=>{

    return{
      items: state.addedItems,
    }
  }

  export default connect(mapStateToProps)(Confimation)
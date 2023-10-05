import React from 'react'
import SideBar from './SideBar'
import BagItem from './BagItem'
import {connect} from 'react-redux'
import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions'
import SideBagCheckout from './SideBagCheckout'
import { HashLink as Link } from 'react-router-hash-link'

const Bag = (props) => {

    const handleAddQuantity= (id)=>{
    props.addQuantity(id)
    }

  const handleSubtractQuantity = (id)=>{
      props.subtractQuantity(id);
   }

  let addedItems = props.items.length >0 ?
   (props.items.map(item=>(
       <BagItem key={item.id}
       handleAddQuantity={handleAddQuantity}
       handleSubtractQuantity={handleSubtractQuantity}
       element={item}/>
    ))):
   (<h3>There are no items in your cart</h3>);

  return (
<section className="dashboard" id='top'>
    <div className="products">
        <SideBar/>
        <div className='middle-container-bag'>
              <h1>Check your Bag Items</h1>
              <div className='view-bag-button-container hide-view'>
                  <h3>Bag Total: $ {props.total}</h3>
                  <br/>
                  <Link to={{pathname:"/checkout", hash:"top"}} className='link-text'>
                      <button className='btn btn-dark view-bag-button'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                             <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
                          </svg>
                          Checkout
                      </button>
                   </Link>
                 </div>
                 <div className='bag-items-container'>
                     {addedItems}
                </div>
         </div>
     </div>
     <SideBagCheckout/>
</section>
  )
}

const mapStateToProps = (state)=>{

  return{
    items: state.addedItems,
    total: state.total
  }
}

const mapDispatchToProps = (dispatch)=>{

  return{
    removeItem: (id)=>{dispatch(removeItem(id))},
    addQuantity: (id)=>{dispatch(addQuantity(id))},
    subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bag)
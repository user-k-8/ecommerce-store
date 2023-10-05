import React from 'react'
import { HashLink as Link} from 'react-router-hash-link'
import {connect} from 'react-redux'
const SideBag = (props) => {

      let sideBagItems = props.items.map(item=>(
            <div className='cart-card'>
                <img src={item.img} alt=''/>
            </div>
      ))
  return (
 <section className="bag-summary-container">
      <div className="bag-summary">
            <h1>Bag</h1>
            <div className='cart-items'>
                {sideBagItems}
           </div>
          <div className='view-bag-button-container'>
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
    </div>
</section>
  )
}

const mapStateToProps = (state)=>{

      return{
        items: state.addedItems,
        total: state.total
      }
    }

export default connect(mapStateToProps)(SideBag)
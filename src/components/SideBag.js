import React from 'react'
import {connect} from 'react-redux'
import { HashLink as Link} from 'react-router-hash-link'
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
         <div>
            <div className='cart-items'>
                {sideBagItems}
             </div>
             <div className='view-bag-button-container'>
               <Link to={{pathname:"/bag", hash:"top"}} className='link-text'>
                 <button className='btn btn-dark view-bag-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-heart-fill" viewBox="0 0 16 16">
                      <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                   </svg> View Bag</button>
               </Link>
             </div>
         </div>
    </div>
</section>
  )
}

const mapStateToProps = (state)=>{

      return{
        items: state.addedItems
      }
    }

export default connect(mapStateToProps)(SideBag)
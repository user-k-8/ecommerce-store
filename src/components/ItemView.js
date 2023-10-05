import React from 'react'
import SideBar from './SideBar'
import SideBag from './SideBag'
import { useLocation } from 'react-router-dom';
import Stars from './Stars'
import {connect } from 'react-redux'
import {addToCart} from './actions/cartActions'
import { HashLink as Link } from 'react-router-hash-link';

const ItemView = (props) => {
 
    const handleClick = (id)=>{
     props.addToCart(id);
    }
     const location = useLocation()
     const {element} = location.state

return (
<section className="dashboard" id='top'>
    <div className="products products-item-view">
        <SideBar/>    
        <div className='middle-container-item-view'>
               <div className='back-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                       <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                    <Link to={{pathname:"/products", hash:"top"}} className='link-text'><h3>Back </h3></Link>
              </div>
              <div className='top-content-container'>
                   <div className='top-content-wrapper'>
                      <div className='images'>
                         <div className='left-cards'>
                            <div className='mini-card'>
                              <img src={element.img} alt=''/>                    
                            </div>
                            <div className='mini-card'>
                               <img src={element.img} alt=''/>
                            </div>
                            <div className='mini-card'>
                               <img src={element.img} alt=''/>
                            </div>
                        </div>
                        <div className='product-card'>
                           <img src={element.img} alt=''/>
                        </div>
                      </div>
                      <div className='product-summary'>
                              <h1>{element.title}</h1>
                              <h2>{element.detail}</h2>
                              <Stars/>
                              <div className='item-view-price'>
                                  <h1>$ {element.price}</h1>
                              </div>
                              <p>{element.summary}</p>
                      </div>
                   </div>
                   <div className='action-buttons'>
                       <div className='view-bag-button-container view-item'>
                           <Link to={{pathname:"/bag", hash:"top"}} className='link-text'>
                               <button className='btn btn-dark view-bag-button hide-view-item'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
                                  </svg>
                                   View Bag
                               </button>
                           </Link>
                       </div>
                       <div className='add-to-bag-button'>
                           <button className='btn btn-dark view-bag-button'   onClick={()=>{handleClick(element.id)}} >
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
                                 </svg>
                                Add to Bag
                            </button>
                        </div>           
                   </div>
              </div>
              <hr className='item-view-h-line'/>
              <div className='bottom-content'>
                   <h1>Description</h1>
                   <p>{element.description}</p>
              </div>
         </div>
    </div>
    <div className='side-bag-item-view'>
       <SideBag/>
    </div>
</section>
  )
}

const mapStateToProps = (state)=>{
     return {
         items: state.items
          }
     }

const mapDispatchToProps=(dispatch)=>{

     return {
         addToCart: (id) =>{dispatch(addToCart(id))}
     }
 }

export default connect(mapStateToProps,mapDispatchToProps)(ItemView)
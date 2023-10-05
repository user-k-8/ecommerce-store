import React from 'react'
import SideBar from './SideBar'
import SideBag from './SideBag'
import ProductItem from './ProductItem'
import {connect } from 'react-redux'
import {addToCart} from './actions/cartActions'
import { HashLink as Link } from 'react-router-hash-link'

const Dashboard = (props) => {

    const handleClick = (id)=>{
        props.addToCart(id);
    }

  const [searchText, setSearchText] = React.useState("");

  const handleSearch =event=>{
     setSearchText(event.target.value)
     console.log(event.target.value)
   }

    var productItems;
    if(searchText!==""){
        var filteredArray = props.items.filter((item)=>{
            return item.title.toLowerCase().includes(searchText.toLowerCase().trim())
        })
        if(filteredArray.length===0){
           productItems= (<h3>Item not available</h3>)
        }
        else{
            productItems = filteredArray.map(item=>(
                <ProductItem handleClick={handleClick} element={item}/>
            ))
        }
    }else{
        productItems= props.items.map(item=>(
                <ProductItem handleClick={handleClick} element={item}/>
            ))
    }
    
  return (

<section className="dashboard" id='top'>
   <div className="products">
      <SideBar/>
      <div className='middle-container'>
         <div className="product-container">
            <div className='search-container'>
                <label htmlFor="search">Search Item</label><br/>
                <div className='search-bar'>
                    <input type="text" id="search" name="search" value={searchText} placeholder='Apple Watch, Samsung S21, Macbook Pro..' onChange={handleSearch}/>
                </div>
            </div>     
         </div>
        <div className='product-items products-margin'>
              {productItems}
            <div className='view-bag-button-container view'>
               <Link to={{pathname:"/bag", hash:"top"}} className='link-text'>
                  <button className='btn btn-dark view-bag-button hide-view'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                         <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
                     </svg>
                      View Bag
                 </button>
               </Link>
             </div>
         </div>
      </div>
    </div>
    <SideBag/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
import React from 'react'
import { HashLink as Link} from 'react-router-hash-link'
import { OverlayTrigger, Overlay, Tooltip, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const ProductItem = ( {handleClick, element}) => {

  const [show, setShow] = React.useState(false);
  const target = React.useRef(null);

  return (
            <div className='home-product-card'>
                  <div className='picture-card'>
                       <img src={element.img} alt=''/>
                  </div>
                  <div className='details-card'>
                        <h1 className='details-heading'>{element.title} </h1>
                        <h2>{element.detail} </h2>
                        <h3 >$ {element.price} </h3>
                        <div className='price'>
                                <Link to={{pathname:"/item-view", hash:"top"}} state={{element}}>
                                    <button className='btn btn-outline-dark view-button'>View</button>
                                </Link>
                                <div> 
                                   <Button variant="dark" ref={target} onClick={() => {setShow(!show); handleClick(element.id)}}>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                                         <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
                                      </svg>
                                  </Button>
                                  <Overlay target={target.current } show={show} placement="bottom">
                                     {(props) => (
                                         <Tooltip  {...props}>
                                              Added to cart!
                                         </Tooltip>
                                        )}
                                  </Overlay>
                                </div >        
                        </div>                 
                 </div>
              </div>
  )
}

export default ProductItem
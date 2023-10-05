import React ,  {useState} from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const SideBar = () => {
  const [menuOpened, setMenuOpened] = useState(true)
  const getMenuStyles = (menuOpened)=>{
    if(document.documentElement.clientWidth >0){

      return {left: !menuOpened && "110%"}
    }
  }
  return (
  <section className='sidebar-container'>
        <div className='sidebar'>
          <Link to={{pathname:"/products", hash:"top"}}>
           <button type="button" class="btn btn-outline-success top-button" title='Shop' >
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
              </svg>
           </button>
          </Link>
        <div className='menu-icon' onClick={()=>setMenuOpened((prev)=>!prev)} title='Menu'>
        <button type="button" class="btn btn-outline-dark menu-btn" >
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
             <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
           </svg>
          </button>
       </div>
       
       <Link to={{pathname:"/products", hash:"top"}}>
       <button type="button" class="btn btn-dark" title='Home'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-heart-fill" viewBox="0 0 16 16">
             <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707L7.293 1.5Z"/>
            <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9.293Zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z"/>
          </svg>
       </button>
       </Link>

       <Link to={{pathname:"/bag", hash:"top"}}>
       <button type="button" class="btn btn-outline dark" title='Cart'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-heart-fill" viewBox="0 0 16 16">
             <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
          </svg>
        </button>
        </Link>

        <div className='signout-button'>
            <button type="button" class="btn btn-danger" title='Signout'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                 </svg>        
            </button>
        </div>

       <div className='h-wrapper'>
          <div className='flexCenter paddings innerWidth h-container'>
       
            <div
               onClick={()=>{setMenuOpened(true)}} >
               <div className='flexCenter h-menu' style={getMenuStyles(menuOpened)}>
                     
                 <Link to={{pathname:"/products", hash:"top"}} className='link-text'>Home</Link>
                 <Link to={{pathname:"/bag", hash:"top"}} className='link-text'>Cart</Link> 
                 <Link to={{pathname:"/checkout", hash:"top"}} className='link-text'>Checkout</Link> 
                    <span className='link-text'>Sign-in</span> 
               </div>
           </div>      
       </div>
    </div>     
  </div>
</section>
  )
}

export default SideBar
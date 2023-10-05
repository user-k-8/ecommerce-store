import React from 'react';
import './Hero.css';
import hero from '../components/img/hero.png'
import {motion} from 'framer-motion'
import SideBar from './SideBar';
import { HashLink as Link } from 'react-router-hash-link';
const Hero = () => {
  return (
    <section className='hero-wrapper'>
      <div className='sidebar-hero'>
         <SideBar/>
      </div>
        <div className='paddings innerWidth flexCenter hero-container'>
              <div className='flexColstart hero-left'>
                    <div className='hero-title'>
                        <div className='blue-circle'/>
                            <motion.h1 
                                initial={{y:"2rem", opacity:0}}
                                animate={{y:0, opacity:1}}
                                transition={{
                                duration:3,
                                type:"spring"
                               }}>
                             <h1 className='hero-h1'>Find your <br/>Next Great <br/>Gadget</h1></motion.h1>
                    </div><br/><br/>
                    <div className='flexColStart hero-des'>
                       <span className='secondaryText'>Find a variety of devices that suit your needs</span>
                       <span className='secondaryText'>Forget all difficulties in finding the perfect device for you</span>
                    </div><br/><br/>
                    <div className='flexColStart '>         
                      <Link className='link-text' to={{pathname:"/products", hash:"top"}}><button className='btn btn-success btn-lg hero-button'>Shop Now</button></Link>
                    </div><br/>
              </div>
              <div className='flexCenter hero-right'>
                   <motion.div 
                        initial={{x:"7rem", opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{
                          duration:3,
                          type:"spring"
                        }} className='image-container'>             
                        <img src={hero} alt=""/>
                    </motion.div>
               </div>
        </div>
    </section>
  )
}

export default Hero
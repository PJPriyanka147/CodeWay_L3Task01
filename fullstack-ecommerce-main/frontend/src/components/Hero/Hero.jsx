import React from 'react';
import './Hero.css';


const Hero = () => {
  return (
    <div classname="hero">
      <div className="herowrapper">
       <div className="imagecontainer01">
        <img src="https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=''/>
       </div>
       <h4>Fashion <br /><span className='everyday'>EVERYDAY.</span> <hr /></h4>
       </div>
    </div>
  )
}

export default Hero
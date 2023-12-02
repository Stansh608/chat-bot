import React, { useState } from 'react'
import image from './rateus.png';


const Rateus = ({actions}) => {
    
    const btn={
        1:"1",
        2:"2",
        3:"3",
        4:"4",
        5:"5"
    }

    let buttonsToDisplay=null;
    const [buttonsDisabled, setButtonsDisabled]=useState(false);
    buttonsToDisplay = <div> {Object.keys(btn).map((ke) => {
        let msg=btn[ke];
        return <button 
        className='landlordbtn' 
        onClick={()=> handleButtonClick(msg)}//pass the key to the handleclick fxn
        key={ke}
        disabled={buttonsDisabled} //setState
        >{ke}</button>;
      })
      }
        </div>
  
  


    const handleButtonClick = (message) => {
      // Pass location data and the key of the button clicked
      // to the HouseNumber component
      
     //pass the selected option to print on the client side.
      actions.randomState(message);
      //console.log(premises[owner].location[key]);
      setButtonsDisabled(true); // Disable all buttons
    }
  return (
    <div className=''>
        <div className='rateContent'>
        <img src={image} alt='rateus' width={'100%'}/>
        </div>
        <div className='fitButtons'>
            {buttonsToDisplay}
        </div>
        
    </div>
  )
}

export default Rateus
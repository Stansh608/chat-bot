import React from 'react';
import HouseNumber from './HouseNumber';

import { useState } from 'react';



const PremisesLocation = ({actions, state}) => {

  const premises=state.data;

    // Logic to display the  buttons
    let buttonsToDisplay = null;
    
    //display the content
    let contentToDisplay = null;
    //use state to make sure the buttons are inactive once clicked
    const [buttonsDisabled, setButtonsDisabled] = useState(false);

    
        contentToDisplay = <div>
            
        {Object.keys(premises.location).map((key)=>{
            //console.log(Object.values(premises[owner].location[key]))
          return <p style={{marginBottom:"3px"}}> <strong>{key}. </strong>{Object.values(premises.location[key]?.name)}</p>;
          
        })}

    </div>
         
        
      buttonsToDisplay = <div> {Object.keys(premises.location).map((ke) => {
        let premise=premises.location[ke].name;
        return <button 
        className='landlordbtn' 
        onClick={()=> handleButtonClick(premise,ke)}//pass the key to the handleclick fxn
        key={ke}
        disabled={buttonsDisabled} //setState
        >{ke}</button>;
      })
      }
        </div>
  
  


    const handleButtonClick = (premise,key) => {
      // Pass location data and the key of the button clicked
      // to the HouseNumber component
      
     //pass the selected option to print on the client side.
      actions.afterPremisesLocation(premise);
      //console.log(premises[owner].location[key]);
      setButtonsDisabled(true); // Disable all buttons
    
      return <HouseNumber premisesData={Object.values(premises.location[key])} selectedKey={key} />;
     
    };

  

  return (
    <div>

        <div className='premisesContent'>{contentToDisplay} </div>
        <div className='fitButtons'>{ buttonsToDisplay }</div> 
      
    </div>
  )
}

export default PremisesLocation
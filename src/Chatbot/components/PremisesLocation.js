import React from 'react';
import HouseNumber from './HouseNumber';

import { useState } from 'react';



const PremisesLocation = ({owner, actions, state}) => {

  const premises=state.data;

    // Logic to display the  buttons based on the owner chosen
    let buttonsToDisplay = null;
    
    //display the content
    let contentToDisplay = null;
    //use state to make sure the buttons are inactive once clicked
    const [buttonsDisabled, setButtonsDisabled] = useState(false);

    //check if owner exist and give button options
    if(premises.hasOwnProperty(owner))
    { 
        contentToDisplay = <div>
            
        {Object.keys(premises[owner].location).map((key)=>{
            //console.log(Object.values(premises[owner].location[key]))
          return <p> <strong>{key}. </strong>{Object.values(premises[owner].location[key]?.name)}</p>;
          
        })}

    </div>
         
        
      buttonsToDisplay = <div> {Object.keys(premises[owner].location).map((ke) => {
        let premise=premises[owner].location[ke].name;
        return <button 
        className='landlordbtn' 
        onClick={()=> handleButtonClick(premise,ke)}//pass the key to the handleclick fxn
        key={ke}
        disabled={buttonsDisabled} //setState
        >{ke}</button>;
      })
      }
        </div>
    } else{
      buttonsToDisplay=<p className='noResults'>Sorry! The LandLord does not Exist!</p>
    }
  


    const handleButtonClick = (premise,key) => {
      // Pass location data and the key of the button clicked
      // to the HouseNumber component
      
     //pass the selected option to print on the client side.
      actions.afterPremisesLocation(premise);
      //console.log(premises[owner].location[key]);
      setButtonsDisabled(true); // Disable all buttons
      
      if (premises.hasOwnProperty(owner)) {
        // Check if the owner exists
       return <HouseNumber premisesData={Object.values(premises[owner].location[key])} selectedKey={key} />;
      }
      
      return <p>Error!</p>;
    };

    //  if (owner === 'maina') {
    //   buttonsToDisplay = Object.keys(premises.maina.location).map((key) => {
    //     return <button key={key}>Click Me!</button>;
    //   });
    // }

  return (
    <div>

        <div className='premisesContent'>{contentToDisplay} </div>
        <div className='fitButtons'>{ buttonsToDisplay }</div> 
      
    </div>
  )
}

export default PremisesLocation
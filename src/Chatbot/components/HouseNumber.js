import React from 'react'
import { useState } from 'react';

const HouseNumber = ({premisesData, actions}) => {

    console.log(premisesData);
    const data={
    name: "201, Buruburu",
    vacant:{

      1: {
        house: "4, 7th Floor",
        price: "2000",
        size: "30sq feet"
      },

      2: {
        house: "9, 4th Floor",
        price: "7000",
        size: "30sq feet"
      },
      3: {
        house: "8, 7th Floor",
        price: "5000",
        size: "60sq feet"
      }
    }
}

let buttonsToDisplay=null;

//for housecontent
let contentToDisplay =null;
//useState to handle button state
const [buttonsDisabled, setButtonsDisabled] = useState(false);

if(Object.keys(data.vacant).length > 0)
    {  
        contentToDisplay = <div>
            
        {Object.keys(data.vacant).map((key) => {
            
          return <p style={{ marginBottom:"12px"}}> <strong>{key}. </strong>  Room <span >{Object.values(data.vacant[key]?.house)}, {Object.values(data.vacant[key]?.size)} <br/> Rent: Kshs {Object.values(data.vacant[key]?.price)}</span></p>;
          
        })}

    </div>
        
      buttonsToDisplay = Object.keys(data.vacant).map((key) => {
        let house= `Room ${data.vacant[key]?.house} ${data.vacant[key]?.size}  Rent: Kshs ${data.vacant[key]?.price}`;
        return <button 
        className='landlordbtn' 
        onClick={()=> handleButtonClick(house, key)}//pass the key to the handleclick fxn
        key={key}
        disabled={buttonsDisabled} //setState initially to false
        >{key}</button>;
      });
    } else{
      buttonsToDisplay=<p className='noResults'>No vacant rooms!</p>
    }
    

    const handleButtonClick = (house, key) => {
      console.log(house);
        // Pass location data and the key of the button clicked
        // to the HouseNumber component
        //console.log(data.vacant[key]);
        //print the options
        actions.afterHouseNumber(house);
        setButtonsDisabled(true); // Disable all buttons
                
        return <div>{ data.vacant[key].house  }</div>;
        
      };


  return (
    <div>
        <div className='premisesContent'>{contentToDisplay} </div>
        <div className='fitButtons'>{ buttonsToDisplay }</div> 
    </div>
  
  )
}

export default HouseNumber
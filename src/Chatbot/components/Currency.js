import React from 'react'
import { useState } from 'react';
const Currency = ({actions}) => {


    // Define 
    let contentToDisplay =null;
    let buttonsToDisplay=null;
    const currency={
        1:"KES",
        2:"USD",
        3:"CAD",
        4:"EUR",
        
    }


    //useSTate
    const[buttonsDisabled, setButtonsDisabled]=useState(false);

    contentToDisplay= Object.keys(currency).map((k)=>{
        let val=currency[k];
       return <p style={{ marginBottom:"12px"}}> <strong> {k}.  {val} </strong> </p>
    
    })
        
   
     

    buttonsToDisplay= Object.keys(currency).map((k)=>{
        let val=currency[k];
                return <button className='landlordbtn' 
                        onClick={()=> handleButtonClick(val.toString())}//pass the key to the handleclick fxn
        key={k}
        disabled={buttonsDisabled} //setState initially to false
        >{k}</button>
        
            })
        
       
  

    //handle clicks
    const handleButtonClick = (kvalue) => {
        
        let data = JSON.parse(localStorage.getItem('datakey'));
        if (typeof data !== 'object') {
        data = {};
        }
        const ins = {
        currency: kvalue
        };
        data = {...data, ...ins};
        
        localStorage.setItem('datakey', JSON.stringify(data));

        actions.afterCurrency(kvalue);
        setButtonsDisabled(true); // Disable all buttons
                
        return <div>{ }</div>;
        
      };

  return (
    <div>
        
        <div className='premisesContent'>{contentToDisplay} </div>
        <div className='fitButtons'>{ buttonsToDisplay }</div> 
    

    </div>
  )
}
export default Currency
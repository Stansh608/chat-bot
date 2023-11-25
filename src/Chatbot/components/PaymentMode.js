import React from 'react'
import { useState } from 'react';

const PaymentMode = ({actions}) => {

    let contentToDisplay =null;
    let buttonsToDisplay=null;
    let key1=1;
    let key2=2;


//useState to handle button state
const [buttonsDisabled, setButtonsDisabled] = useState(false);


    contentToDisplay= <div>
        <p style={{ marginBottom:"12px"}}> <strong>1.  Quarterly </strong> (Pay on Jan, Apr, July & Oct)</p>
        <p style={{ marginBottom:"12px"}}> <strong>2.  Monthly </strong> (Before date 5, every month)</p>
        
    </div>

    buttonsToDisplay=<div><button 
    className='landlordbtn' 
    onClick={()=> handleButtonClick(key1)}//pass the key to the handleclick fxn
    key={key1}
    disabled={buttonsDisabled} //setState initially to false
    >{key1}</button>
    <button 
    className='landlordbtn' 
    onClick={()=> handleButtonClick(key2)}//pass the key to the handleclick fxn
    key={key2}
    disabled={buttonsDisabled} //setState initially to false
    >{key2}</button>
    </div>

    //handle clicks
    const handleButtonClick = (key) => {
        // Pass location data and the key of the button clicked
        // to the HouseNumber component
        //console.log(data.vacant[key]);
        //print the options
        let mode="";
        if (key === 1){
            mode="Quarterly";

        }else {
            mode="Monthly";

        }
        //read local storage and update value
        let data = JSON.parse(localStorage.getItem('datakey'));
        if (typeof data !== 'object') {
        data = {};
        }
        const ins = {
        paymentmode: mode
        };
        data = {...data, ...ins};
        localStorage.setItem('datakey', JSON.stringify(data));
        
        actions.afterPaymentMode(mode);
        setButtonsDisabled(true); // Disable all buttons
                
        return <div>{ }</div>;
        
    }

  return (
    <div>
        <div>
        <div className='premisesContent'>{contentToDisplay} </div>
        <div className='fitButtons'>{ buttonsToDisplay }</div> 
    </div>

    </div>
  )
}

export default PaymentMode
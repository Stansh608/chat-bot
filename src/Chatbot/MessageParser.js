import React from 'react';
import { useState,useEffect } from 'react';
import UserInfo from './components/UserInfo';

const MessageParser = ({ children, actions, setState,  }) => {
    // console.log(children.props.state)
    const { checker } = children.props.state;

    //The data container
    const [data, setData]= useState([])

    // Take the variables
    const [tename, setTename] = useState("");
    const [tecompany, setTecompany]= useState("");
    const [tedirector, setTedirector] = useState("");
    const [lacompany, setLacompany]  = useState("");
    const [houseloc, setHouseloc] = useState("");
    const [houseno, setHouseno] = useState("");
    const [floorno, setFloorno] = useState("");
    const [housesize, setHousesize] = useState("");
    const [houseprice, setHouseprice] = useState("");
    const [leaseperiod, setLeaseperiod] = useState("");
    const [paymentmode, setPaymentmode] = useState("");
    const [currency, setCurrency] = useState("");
    const [leasedate, setLeasedate] = useState("");
    const [deposit, setDeposit] = useState("");
    const [annual, setAnnual] = useState("");


    useEffect(()=>{
        localStorage.setItem('datakey', JSON.stringify(data))
    },[data])

   
    const parse = (message) => {
        if (checker === "tenant") {
            setTename(message);

            actions.afterTenantName();  
        }
       
        //
        if (checker ==="company"){
            setTecompany(message);

            actions.afterCompanyName();
        }

        //
        if (checker ==="director"){
            setTedirector(message);
            actions.afterDirectorName();
        }

        //
        if (checker === "landlord") {
            setLacompany(message);
            actions.afterLandLordName();
            
        }
        if (checker === "premises") {
            setHouseloc(message);
            
            
        }
        //houseno
        if (checker=== "houseno"){
            setHouseno(message);
            actions.afterHouseNumber();

        }
        if (checker=== "floor"){
            setFloorno(message);
            actions.afterFloor();

        }
        //entered housesize
        if (checker==="square"){
            setHousesize(message);
            actions.afterSize();

        }
        //entered price
        if (checker=== "price"){
            setHouseprice(message);
            actions.afterHousePrice();

        }

        if (checker === "lease") {
            setLeaseperiod(message);
            actions.afterLeasePeriod();
            
        }
        if (checker === "startDate") {
            setLeasedate(message);
            actions.afterStartDate();
           
        }
        if (checker === "deposit") {
            setDeposit(message);
            actions.afterDeposit();
           
        } 
        if (checker === "payment") {
            setPaymentmode(message);
        } 
        if (checker === "currency") {
            setCurrency(message);
            
           
        } 
        if (checker === "anual") {
            setAnnual(message);
            console.log(message)
            actions.afterAnnualRate();
        }
        if (checker=== "finalState"){
            
            actions.randomState()
        }

        var vdata={
            tename:tename,
            tecompany:tecompany,
            tedirector:tedirector,
            lacompany: lacompany,
            houseloc: houseloc,
            houseno: houseno,
            floorno: floorno,
            housesize: housesize,
            houseprice: houseprice,
            leaseperiod: leaseperiod,
            paymentmode: paymentmode,
            currency: currency,
            leasedate: leasedate,
            deposit: deposit,
            annual: annual,

        }
        setData(vdata)
       

    }
    
   
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
          
          <br/>   <br/>
      <UserInfo />
        </div>
    );
};

export default MessageParser;

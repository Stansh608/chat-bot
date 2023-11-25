import React from 'react';
import { useState,useEffect } from 'react';
import UserInfo from './components/UserInfo';

const MessageParser = ({ children, actions, setState,  }) => {
    // console.log(children.props.state)
    const { checker } = children.props.state;

    //The data container
    const [data, setData]= useState([]);

    // Take the variables
    const [tename, setTename] = useState("");
    const [tecompany, setTecompany]= useState("");
    const [tedirector, setTedirector] = useState("");
    const [lacompany, setLacompany]  = useState("");
    //const [houseloc, setHouseloc] = useState("");
    const [houseno, setHouseno] = useState("");
    const [floorno, setFloorno] = useState("");
    const [housesize, setHousesize] = useState("");
    const [houseprice, setHouseprice] = useState("");
    const [leaseperiod, setLeaseperiod] = useState("");
    
    const [leasedate, setLeasedate] = useState("");

    
    const [some, setSome] = useState("");


    useEffect(()=>{
        let data1 = JSON.parse(localStorage.getItem('datakey'));
if (typeof data !== 'object') {
 data1 = {};
}
data1 = {...data1, ...data};
        localStorage.setItem('datakey', JSON.stringify(data1))
    },)

    const parse = (message) => {
        var vdata={
            tename:tename,
            tecompany:tecompany,
            tedirector:tedirector,
            lacompany: lacompany,
           
            houseno: houseno,
            floorno: floorno,
            housesize: housesize,
            houseprice: houseprice,
            leaseperiod: leaseperiod,
           
            leasedate: leasedate,
           
            
            some:some,

        }
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
            let data = JSON.parse(localStorage.getItem('datakey'));
            if (typeof data !== 'object') {
            data = {};
            }
            const ins = {
            deposit: message
            };
            data = {...data, ...ins};
            localStorage.setItem('datakey', JSON.stringify(data));
             
            actions.afterDeposit();
           
        } 
        if (checker === "payment") {
            
            actions.afterPaymentMode();
        } 
        if (checker === "currency") {
            
            actions.afterCurrency();
        } 
        if (checker === "anual") {
            let data = JSON.parse(localStorage.getItem('datakey'));
            if (typeof data !== 'object') {
            data = {};
            }
            const ins = {
            annual: message
            };
            data = {...data, ...ins};
            localStorage.setItem('datakey', JSON.stringify(data));
             
          
            actions.afterAnnualRate();
        }
        if (checker=== "finalState"){
            setSome(message);
            actions.randomState()
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

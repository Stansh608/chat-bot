import React, {useRef} from 'react'
import image from './image001.jpg';
//react-to-print library
import { useReactToPrint } from 'react-to-print';

const PrintInfo = () => {
    
    // Get the data from local storage
    const local = JSON.parse(localStorage.getItem('datakey'))
    console.log(local)

    //useRef
    const printRef = useRef();

    //to handle print
    const handlePrint = useReactToPrint({
    content: () => printRef.current,
    });


  return (
    <div >

           {/* button to print  */}
     <div>  <button onClick={handlePrint} className='printBtn'> Print</button></div>
        <div ref={printRef} className='toPrint' id='toPrint'>
        <h1 className='companyHead'> <img src={image} alt='ABC'/> Lease Information</h1>
        <br/> <br/> <br/> 
        <h2 className='heads'><u>Personal Information</u></h2>
        <div className="grid-container">
            <div>
                <p className='entry'>Tenant's Names: <span className='entryValue'>{local["tename"]}</span></p>
                <p className='entry'>Tenant's Company: <span className='entryValue'>{local["tecompany"]}</span></p>
            </div>
            <div>
                <p className='entry'>Director's Names: <span className='entryValue'>{local["tedirector"]}</span></p>
                <p className='entry'>Landlord's Company: <span className='entryValue'>{local["lacompany"]}</span></p>
            </div>
        </div>
        <h2 className='heads'><u>House Information</u></h2>
        <div className='grid-container'>
            <div>
                <p className='entry'>Location: <span className='entryValue'>{local["houseloc"]}</span></p>
                <p className='entry'>Door No.: <span className='entryValue'>{local["houseno"]}</span></p>
            </div>
            <div>
                <p className='entry'>Floor No.: <span className='entryValue'>{local["floorno"]}</span></p>
                <p className='entry'>Square Feet: <span className='entryValue'>{local["housesize"]}</span></p>
            </div>
            
        </div>
        <h2 className='heads'><u>Lease Information</u></h2>
        <div className='grid-container'>
            <div>
                <p className='entry'>Lease Period: <span className='entryValue'>{local["leaseperiod"] + ' Months'}</span></p>
                <p className='entry'>Payment Mode: <span className='entryValue'>{local["paymentmode"]}</span></p>
            </div>
            <div>
                <p className='entry'>Monthly Price: <span className='entryValue'>{local["houseprice"]}</span></p>
                <p className='entry'>Currrency: <span className='entryValue'>{local["currency"]}</span></p>
            </div>
            <div>
                <p className='entry'>Annual Increase Rate: <span className='entryValue'>{local["annual"] + '%'} </span></p>
               
            </div>
            
            <div>
                <p className='entry'>Deposit Amount: <span className='entryValue'>{local["deposit"]+ " " + local["currency"]}</span></p>
            </div>
            
        </div>
        <br/>
        <p style={{textAlign:'center',fontWeight:"bold", fontSize: "20px", fontFamily:"Times New Roman"}} >Lease Commencement Date: <span className='entryValue'>{local["leasedate"]}</span></p>
        <br/><br/>
        </div>
        <p className='copyrights'>
        Developed by DevStanshTechSolutions @2023 | All Rights Reserved.
        </p> 
       </div>
       

  )
}

export default PrintInfo
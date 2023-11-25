import React from 'react'
import { useEffect } from 'react'
import './Style.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';


const UserInfo = () => {
    // Get the data from local storage
    const local = JSON.parse(localStorage.getItem('datakey'))
    
    let tableToDisplay=null;
    if(local){
      tableToDisplay=<div>
         <Table>
      <Thead>
        <Tr>
          <Th>Names</Th>
          <Th>Company</Th>
          <Th>Director</Th>
          <Th>landlord</Th>
          <Th>Location</Th>
          <Th>House No. </Th>
          <Th>Floor No.</Th>
        
          <Th>Square Feet</Th>
          <Th>Lease Amt</Th>
          <Th>Lease Period</Th>
          <Th>Pay Mode</Th>
          <Th>Currency</Th>
          <Th>Annual Rate</Th>
          <Th>Commencement Date</Th>
          <Th>Deposit</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{local["tename"]}</Td>
          <Td>{local["tecompany"]}</Td>
          <Td>{local["tedirector"]}</Td>
          <Td>{local["lacompany"]}</Td>
          <Td>{local["houseloc"]}</Td>
          <Td>{local["houseno"]}</Td>
          <Td>{local["floorno"]}</Td>
          
          <Td>{local["housesize"]}</Td>
          <Td>{local["houseprice"]}</Td>
          <Td>{local["leaseperiod"]}</Td>
          <Td>{local["paymentmode"]}</Td>
          <Td>{local["currency"]}</Td>
          <Td>{local["annual"]}</Td>
          <Td>{local["leasedate"]}</Td>
          <Td>{local["deposit"]}</Td>
        </Tr>
      </Tbody>
    </Table>

      </div>
    }
    useEffect (()=>{
      console.log(local);

    },)
   
  return (

    <div> 
      {tableToDisplay}
        

    </div>
  )
}

export default UserInfo
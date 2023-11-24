import React from 'react'
import { useEffect } from 'react'

//import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

const UserInfo = () => {
    // Get the data from local storage
    const local = JSON.parse(localStorage.getItem('datakey'))
    
    useEffect (()=>{
      console.log(local);

    },)
   
  return (

    <div>

         {/* <Table>
      <Thead>
        <Tr>
          <Th>Event</Th>
          <Th>Date</Th>
          <Th>Location</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{local["tename"]}</Td>
          <Td>{local["tecompany"]}</Td>
          <Td>{local["tedirector"]}</Td>
        </Tr>
        <Tr>
          <Td>Capstone Data</Td>
          <Td>19 May 2019</Td>
          <Td>205 Gorgas</Td>
        </Tr>
        <Tr>
          <Td>Tuscaloosa D3</Td>
          <Td>29 June 2019</Td>
          <Td>Github</Td>
        </Tr>
      </Tbody>
    </Table> */}
    </div>
  )
}

export default UserInfo
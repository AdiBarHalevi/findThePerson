import { useState } from "react"
import styled from "styled-components"
import { PeopleInProximityInterFace, personInProximityInterFace } from "../Types"



       
const UsersDisplay = ({peopleInProximity}:{peopleInProximity:Array<PeopleInProximityInterFace>|[]})=>{
    return( 
    <>  
      <table>
          <thead>
              <tr>
                  <th>
                      proximity
                  </th>
                  <th>
                      name
                  </th>
                  <th>
                      Address
                  </th>
              </tr>
         </thead>
         <tbody>
        {peopleInProximity.map((person:PeopleInProximityInterFace,index)=>{
            return(
                    <tr key={index}>
                        <td>
                            {index+1}
                        </td>
                         <td>
                             {person.userName}
                        </td>
                         <td>
                             {person.address}
                         </td>
     
                        </tr>
                    )
                    })}
                </tbody>
            </table>
    </>
    )
}

export default UsersDisplay

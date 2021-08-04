import styled from "styled-components";
import {
  PeopleInProximityInterFace,
} from "../Types";

const UsersDisplay = ({
  peopleInProximity,
}: {
  peopleInProximity: Array<PeopleInProximityInterFace> | [];
}) => {
  return (
    <Wrapper>
      <table>
        <tbody>
          {peopleInProximity.map(
            (person: PeopleInProximityInterFace, index) => {
              return (
                <TR key={index}>
                  <NumberTd>{index + 1}</NumberTd>
                  <Td>{person.userName}</Td>
                  <Td>{person.address}</Td>
                </TR>
              );
            }
          )}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default UsersDisplay;

const TR = styled.tr`
  display:flex;
  justify-content:start;
  align-items-center;
  margin-bottom:8px;
`
const Td= styled.td`
  width:33%;
  text-algin:center;
  padding:1rem;
  align-self: center;

`


const Wrapper = styled.div`
  margin-top: 18px;
  display:flex;
  justify-content:center;
  margin-left:3rem;
  overflow:auto;

`



const NumberTd = styled.td`
  width:1rem;
  padding:12px;
  text-align: center;
  align-self: center;
`

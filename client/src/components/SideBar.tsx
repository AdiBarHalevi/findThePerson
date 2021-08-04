import { useState } from "react";
import styled from "styled-components";
import { Geolocation, PeopleInProximityInterFace } from "../Types";
import ProvideAddress from "./ProvideAddress";
import UsersDisplay from "./UsersDisplay";
import Arrow from "../assets/arrow.png";
import ArrowRight from "../assets/arrowRight.png";

const SideBar = ({
  peopleInProximity,
  queryingAddress,
  setQueryingAddress,
  setAmountOfUsers,
  queryingCooardinates
}: {
  peopleInProximity: Array<PeopleInProximityInterFace>;
  queryingAddress: string;
  setQueryingAddress: Function;
  setAmountOfUsers: Function;
  queryingCooardinates: Geolocation
}) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const handleClick = () => setIsSideBarOpen(!isSideBarOpen);

  return (
    <SideBarContainer>
      {isSideBarOpen && (
        <FlexBox>
          <ProvideAddress
            setQueryingAddress={setQueryingAddress}
            setAmountOfUsers={setAmountOfUsers}
          />

          {queryingAddress.length > 0 && (
            <>
              <AddressDisplayLabel>provided location: </AddressDisplayLabel>
              <AddressDisplayValue>{queryingAddress}</AddressDisplayValue>
            </>
          )}

          {peopleInProximity.length > 0 && (
            <UsersDisplay queryingCooardinates={queryingCooardinates} peopleInProximity={peopleInProximity} />
          )}
        </FlexBox>
      )}
      <BookMark onClick={handleClick}>
        <ArrowButton arrow={isSideBarOpen ? Arrow : ArrowRight} />:
      </BookMark>
    </SideBarContainer>
  );
};

export default SideBar;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 99vh;
  width: 35vw;
`;
const BookMark = styled.div`
  height: 100%;
  width: 3vw;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowButton = styled(`div`)<{ arrow: string }>`
  background: ${(props) => `url(${props.arrow}) center center/cover`};
  height: 50px;
  width: 50px;
`;

const SideBarContainer = styled.div`
  display: flex;
  box-shadow: 5px 5px 15px 5pxs black;
  border: 2px solid lightblue;
  padding-left: 10px
  justify-content: space-around;
  
`;

const AddressDisplayLabel = styled.h2`
  text-align: center;
  font-size: 1rem;
  font-weight: normal;
`;

const AddressDisplayValue = styled.h1`
  text-align: center;
  font-size: 1rem;
`;

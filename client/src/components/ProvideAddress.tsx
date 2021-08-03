import { useState } from "react";
import styled from "styled-components";

const ProvideAddress = ({
  setQueryingAddress,
  setAmountOfUsers
}: {
  setQueryingAddress: Function;
  setAmountOfUsers:Function;
}) => {
  const [address, setAddress] = useState("");
  const [StreetNumber, setStreetNumber] = useState(1);
  const [wantedUserCount, setWantedUserCount] = useState(1);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const queryingAddress = `${address},${StreetNumber} London,UK`;
    setQueryingAddress(queryingAddress);
    setAmountOfUsers(wantedUserCount)
  };

  return (
    <MapContainer>
      <Form onSubmit={handleSubmit}>
        <FlexBox>
        <FlexBox>
          <Label>Street Name</Label>
          <Input
            type="text"
            value={address}
            onChange={(e: any) => setAddress(e.target.value)}
            required
          />
        </FlexBox>
        <FlexBox>
          <Label>Street Number</Label>
          <Input
            type="number"
            value={StreetNumber}
            min="1"
            onChange={(e: any) => setStreetNumber(e.target.value)}
            required
          />
        </FlexBox>
        <FlexBox>
          <Label>how many would you like to see?</Label>
            <Input
              type="number"
              value={wantedUserCount}
              min="1"
              onChange={(e: any) => setWantedUserCount(e.target.value)}
              required
            />
        </FlexBox>
        </FlexBox>
        <Submit type="submit" />
      </Form>
    </MapContainer>
  );
};

export default ProvideAddress;

const MapContainer = styled.div`
  width: 25vw;
  background: white;
  display: flex;
  flex-direction: column;
`;
const Form = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;
const FlexBox = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
`;
const Input = styled.input<{ width?: string }>`
  width: ${(props) => props.width};
  align-self: center;
`;
const Submit = styled.input`
  height: 20px;
  margin-top: 10px;
  background: white;
  border-radius: 5px;
  border: 1px solid blue;
  box-shadow: 1px 1px 2px 1px grey;
  cursor: pointer;
`;

const Label = styled.label`
  margin: 15px 0 10px 0;
  color: #000080 ;
  text-align:center;
`
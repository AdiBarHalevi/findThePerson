import { useState } from "react"
import styled from "styled-components"


const SearchBar = ({setQueryingCoardinates}:{setQueryingCoardinates:Function})=>{
    const [lng, setLng] = useState(0)
    const [lat, setLat] = useState(0)

    const handleSubmit=(event:React.FormEvent)=>{
        event.preventDefault()

        setQueryingCoardinates({latitude:lng,longitude:lat})
    }

    return( 
    <MapContainer>
        <Form onSubmit={handleSubmit}>
            <FlexBox >
                <label>street Name</label>
                <input type="number" value={lng} onChange={(e:any)=>setLng(e.target.value)} required/>
            </FlexBox>
            <FlexBox>
                <label>street number</label>
                <Input width="40px" type="number" value={lat} onChange={(e:any)=>setLat(e.target.value)} required/>
            </FlexBox>
            <Submit type="submit"/>
        </Form>
    </MapContainer>
    )
}

export default SearchBar

const MapContainer = styled.div`
  width:25vw;
  background:white;
  display:flex;
  flex-direction:column;
  
`
const Form = styled.form`
  display:flex;
  justify-content:space-around;
  align-items:center;
`
const FlexBox = styled.div<{ width?: string }>`
    display:flex;
    flex-direction:column;
    width:${(props)=>props.width};
   
`
const Input = styled.input<{ width?: string }>`
    width:${(props)=>props.width};
    align-self:center;
`
const Submit = styled.input`
    height:60%;
    align-self: flex-end;

`
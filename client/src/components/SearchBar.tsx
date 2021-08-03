import { useState } from "react"
import styled from "styled-components"


const SearchBar = ({setAdress}:{setAdress:Function})=>{
    const [streetInput, setStreetInput] = useState('')
    const [numberInput, setNumberInput] = useState(0)

    const handleSubmit=(event:React.FormEvent)=>{
        event.preventDefault()
        const adressString = `${streetInput} ${numberInput}`
        setAdress(adressString)
    }

    return( 
    <MapContainer>
        <Form onSubmit={handleSubmit}>
            <FlexBox >
                <label>street Name</label>
                <input type="text" value={streetInput} onChange={(e:any)=>setStreetInput(e.target.value)} required/>
            </FlexBox>
            <FlexBox>
                <label>street number</label>
                <Input width="40px" type="number" value={numberInput} onChange={(e:any)=>setNumberInput(e.target.value)} required/>
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
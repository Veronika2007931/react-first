
  import styled from "styled-components"
const getBgc =  (props)=>{
    switch(props.type){
    case 'error':
        return'red';
    case 'warning':
        return 'orange'; 
    case 'succes':
        return 'green';     

    default:
        return 'grey'
}}
export const StyledAlert = styled.p`
    line-height: 1.5;
     padding: 10px 20px;
     background-color: ${getBgc};
     color: #fff;
`



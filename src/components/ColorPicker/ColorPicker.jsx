import React, {Component} from "react"
import{Container, Title, ColorpickerOption} from "./ColorPicker.styled"

export class ColorPicker extends Component{

state={
  colorOptionIdx: 0
}
handleClick=(optionId)=>{
  if(optionId === this.state.colorOptionIdx){
    return
  }
  this.setState({colorOptionIdx: optionId})
}
  render(){
const {options} = this.props;
const {colorOptionIdx} = this.state
const label = options[colorOptionIdx].lable
    return (
      <Container >
<Title >Color Picker</Title>
<span >Обраний колір:{label}</span>
{this.props.options.map(({label, color}, idx) => (
<ColorpickerOption
     onClick = {()=>{this.handleClick(idx)}}
     key={label}
     bgc = {color}
     idx={idx}
     currentIdx={colorOptionIdx}>

</ColorpickerOption>))}

</Container>
  
  )}
}
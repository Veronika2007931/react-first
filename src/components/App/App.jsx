
import '../App/App.css';
// import painting from '../painting.json'
// import {colorPickerOptions} from '../../colorOptions.jsx'
// import { PaintingList } from '../PaintitgList/PaintingList'
// import { ColorPicker } from '../ColorPicker/ColorPicker';
import {Alert} from '../Alert/Alert.jsx'
import{GlobalStyles} from "../../GlobalStyle.styled.jsx"

// import {Title, Container} from "./App.styled.jsx"
function App() {
  return (
    <>

   {/* <Container>
    <Title>Title</Title>
   </Container> */}
       {/* <PaintingList painting={painting} /> */}
    <Alert text="Last warning!!" type="warning"/>
    <Alert text="Everything is ok!" type="succes"/>
    <Alert text="Everything fall :( " type="error"/>
       {/* < ColorPicker options = {colorPickerOptions}/> */}
       <GlobalStyles/>
    </>
  );
}

export default App;


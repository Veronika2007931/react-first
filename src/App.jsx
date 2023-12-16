
import './App.css';
import painting from './components/painting.json'
// import {colorPickerOptions} from './colorOptions'
import { PaintingList } from './components/PaintitgList/PaintingList'
// import { ColorPicker } from './components/ColorPicker/ColorPicker';
// import {Alert} from './components/Alert/Alert.jsx'
function App() {
  return (
    <>
       <PaintingList painting={painting} />
    {/* <Alert text="Last warning!!" type="warning"/>
    <Alert text="Everything is ok!" type="succes"/>
    <Alert text="Everything fall :( " type="eror"/> */}
       {/* < ColorPicker options = {colorPickerOptions}/> */}
    </>
  );
}

export default App;


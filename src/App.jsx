
import './App.css';
import painting from './components/painting.json'
import { PaintingList } from './components/PaintitgList/PaintingList'

function App() {
  return (
    <>
       <PaintingList painting={painting} />
    </>
  );
}

export default App;

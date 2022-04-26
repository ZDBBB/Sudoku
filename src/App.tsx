import GameController from './Components/GameController';
import SudokuGrid from './Components/SudokuGrid';
import Timer from './Components/Timer';

function App() {
  return (
  <div className='container'>
    <SudokuGrid/>
    <Timer/>
    <GameController/>
  </div>
  );
}

export default App;

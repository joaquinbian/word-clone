import Game from "../Game";
import GuessForm from "../GuessForm/GuessForm";
import Header from "../Header";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
        <GuessForm />
      </div>
    </div>
  );
}

export default App;

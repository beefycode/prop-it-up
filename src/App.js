import logo from './logo.svg';
import './App.css';
import './components/PersonCard';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className='App'>
      <PersonCard
        firstName={"Abe"}
        lastName={"Lincoln"}
        age={99}
        hairColor={"Gray"}/>
      <PersonCard
        firstName={"Frank"}
        lastName={"Harper"}
        age={12}
        hairColor={"Black"}/>
      <PersonCard
        firstName={"Mandy"}
        lastName={"Mulligans"}
        age={24}
        hairColor={"Blonde"}/>
</div>
  );
}

export default App;

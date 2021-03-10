import './App.css';
import MyCard from './components/Card.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyCard />
      </header>
    </div>
  );
}

export default App;

  // const [cards, setCards] = useState(
  //   [{
  //     id: 1,
  //     cardname: 'Sample Card 1',
  //     cardtype: 'conveyor',
  //     inputup: true,
  //     inputright: false,
  //     inputdown: false,
  //     inputleft: false,
  //     outputup: false,
  //     outputright: false,
  //     outputdown: true,
  //     outputleft: false,
  //     price: 10
  //   },
  //   {
  //     id: 1,
  //     cardname: 'Sample Card 2',
  //     cardtype: 'conveyor',
  //     inputup: true,
  //     inputright: false,
  //     inputdown: false,
  //     inputleft: false,
  //     outputup: false,
  //     outputright: true,
  //     outputdown: false,
  //     outputleft: false,
  //     price: 10
  //   },
  //   {
  //     id: 1,
  //     cardname: 'Sample Card 3',
  //     cardtype: 'conveyor',
  //     inputup: false,
  //     inputright: true,
  //     inputdown: false,
  //     inputleft: false,
  //     outputup: false,
  //     outputright: false,
  //     outputdown: false,
  //     outputleft: true,
  //     price: 10,
  //   }
  // ])

 

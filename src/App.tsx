import Counter from './bases/Counter';
import CounterBy from './bases/CounterBy';
import CounterEffect from './bases/CounterEffect';
const initialValue: number = 15;
function App() {
  return (<>
    <Counter initialValue={initialValue} />
    <CounterBy />
    <CounterEffect />
  </>);
}

export default App;

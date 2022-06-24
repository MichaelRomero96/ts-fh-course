import Counter from './bases/Counter';
import CounterBy from './bases/CounterBy';
const initialValue: number = 15;
function App() {
  return (<>
    <Counter initialValue={initialValue} />
    <CounterBy />
  </>);
}

export default App;

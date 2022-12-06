import './App.css';
import imageOne from './grocery-bag.png';
import imageTwo from './shopping.png';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="my-app">
      <img src={ imageOne } width="150px" alt="Groceries"/>
      <h1>GROCERY LIST</h1>
      <GroceryList/>
      <img src={ imageTwo } width="150px" alt="Shopping"/>
    </div>
  );
}

export default App;

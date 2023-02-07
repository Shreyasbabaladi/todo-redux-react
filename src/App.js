import './App.css';
import Todos from './components/Todos';

//redux
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>

       <Todos /> 
      
    </Provider>
  );
}

export default App;

import Routes from './routes/Routes';
import './styles/main.scss';
import store from './redux/store/store';
import axios from 'axios';
import { baseURL } from './utils/base-url';
import { Provider } from 'react-redux';

axios.defaults.baseURL = baseURL;

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;

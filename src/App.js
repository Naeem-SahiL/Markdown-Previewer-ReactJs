
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import $ from 'jquery';
// import Popper from 'popper.js';

import './App.scss';
import Layout from './components/Layout/Layout';
import EditorContextProvider from './Context/EditorContextProvider';

function App() {
  return (
    <EditorContextProvider>
      <div className="App">
        <Layout />
      </div>
    </EditorContextProvider>

  );
}

export default App;

import { useState } from 'react';
import './App.css';

import AppLayout from './components/layout';
import { Button } from 'antd';
import Calls from './pages/calls';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Calls />
    </>
  );
}

export default App;

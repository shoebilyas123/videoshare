import { useState } from 'react';
import './App.css';

import AppLayout from './components/layout';
import { Button } from 'antd';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppLayout></AppLayout>
    </>
  );
}

export default App;

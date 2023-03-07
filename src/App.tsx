import React from 'react';
import Card from './components/card';
import { CardVariant } from './components/card';

function App() {
  return (
    <div>
      <Card variant={CardVariant.outlined} width={'200px'} height={'200px'} />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import StyleComponent from './components/StyelComponent';
import FormHandling from './components/FormHandling';
import RefParent from './components/RefParent';
import ErrorBoundary from './components/ErrorBoundary';
import ContextAPIUses from './components/ContextAPIUses';
import GlobalDataProvider from './components/ContextAPIMain';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <GlobalDataProvider>
          <ContextAPIUses></ContextAPIUses>
        </GlobalDataProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;

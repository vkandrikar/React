import React from 'react';
import './App.css';
import StyleComponent from './components/StyelComponent';
import FormHandling from './components/FormHandling';
import RefParent from './components/RefParent';
import ErrorBoundary from './components/ErrorBoundary';
import ContextAPIUses from './components/ContextAPIUses';
import GlobalDataProvider from './components/ContextAPIMain';
import HOCSample from './components/HOCSample';
import ReMountCompParent from './components/ReMountCompParent';
import DynamicState from './components/DynamicState';
import DynamicState2 from './components/DynamicState2';

function App() {
return (
    <div className="App">
        <ErrorBoundary>
            {/* 
            Context API Sample
                <GlobalDataProvider>
                    <ContextAPIUses></ContextAPIUses>
                </GlobalDataProvider> 
            */}
            
            {/* 
            HOC sample
                <HOCSample/> 
            */}

            {/* <ReMountCompParent/>
            */}

            <DynamicState2/>
        </ErrorBoundary>
    </div>
);
}

export default App;

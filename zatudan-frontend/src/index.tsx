import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './components/Hello';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <Hello />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

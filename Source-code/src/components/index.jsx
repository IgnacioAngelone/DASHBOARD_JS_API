/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';

export const Index = () => {
     return (
         <div>
             <p>Hello, world!</p>
         </div>
     );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Index />);
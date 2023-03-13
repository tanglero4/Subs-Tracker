import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



export default function Home(){
const totalcost = 0
Sub.forEach((sub)=> totalcost += sub.Cost)
return(

<div>
  {sub && sub.map((sub,i)=> {return(<div key= {i}>{sub.subName} {sub.subCost}</div>)})}
</div>
)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

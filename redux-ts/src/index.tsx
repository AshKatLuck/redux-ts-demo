import ReactDOM from 'react-dom/client';
import App from './components/App';

const el=document.getElementById("root");


const root=ReactDOM.createRoot(el!);


// const App=()=>{

//   return (<div>
//     <h1>Hi there!!!</h1>
//   </div>);
// };


root.render(<App/>)
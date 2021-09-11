import React,{useState} from 'react';
import './App.css';


function App() {
  const [bill,setBill]=useState(0);
  const [tip,setTip]=useState(0);
  const [person,setPerson]=useState(1);

  const [tipPerPerson,setTipPerPerson] = useState(0);
  const [total,setTotal] = useState(0);
  

  const updateTipPerPerson=()=>{
   
   setTipPerPerson(Math.floor((bill / tip)/person));
   setTotal(((parseInt(bill) + parseInt(tip))/parseInt(person)).toFixed(2));
   //alert(typeof(parseInt(bill)));
   // alert(bill / tip);
  }
  const updateBill= (e)=>{
    e.preventDefault();
    setBill(e.target.value);
  }
  const updateTipPercent = (e)=>{
    e.preventDefault();
    setTip(e.target.value);
    
  
  }
const updatePeople = (e)=>{
  e.preventDefault();
  setPerson(e.target.value);
  
}
  return (
    <div className="App">
    <h1>Tipper</h1>
    <div className="card">
    <div className="row"><label>Bill</label>  <input type="number" placeholder="Bill amount" onChange={updateBill} /></div>
    <div className="row"><label>Tip %</label>  <input type="number" placeholder="Tip %" onChange={updateTipPercent}/></div>
    <div className="row"><label>No Of People</label>  <input type="number" placeholder="No of People" onChange={updatePeople}/></div>
      <button onClick={updateTipPerPerson}>calculate</button>
      </div>
      <div className="result">
     <label>Total per person:</label> <h2>{total} $</h2>
     <label>Tip per person :</label> <h2>{tipPerPerson} $</h2>
      </div>

    </div>
  );
}

export default App;

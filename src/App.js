import { useState } from "react";

export default function App() {
  const [bober, setBober] = useState({wert: 0, kommentar: "Pengwin"});
  console.log("Rerender")
  return (
    <div className="App">
      <div>{bober.kommentar}</div>
      <div>{bober.wert}</div>
      <button onClick={() => {
        console.log(bober);
        setBober({...bober, wert: bober.wert + 1})
        
      }}>      
        
      Klick mich</button>
      <input onChange={(e) => setBober({...bober, kommentar: e.target.value})}/>
    </div>
  );
}

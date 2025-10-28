//import {useState} from "react";
//function MyForm(){
  //const [name, setname]=useState("");
//   const handleChange=(event)=>{
//     setname(event.target.value);//react know that the name state is changed
//   };
//   const handlesubmit=(event)=>{
//     event.preventDefault();//stop the page from refreshing
//     alert(`heloo, ${name}`);

//   };
//   return(
//     <form onSubmit={handlesubmit}>
//       <input type="text" value={name} onChange={handleChange} placeholder="enter a name"/>
//       <button type="submit">submit</button>
//     </form>
//   );
// }                                                    
// export default MyForm;

// function App(){
//   const name=["vanshika", "chouhan", "anjana","kumari"];
//   return(
//     <div>
//       <ul>
//         {name.map((name,index)=>(
//           <li key={index}>{name}</li>
//         )
//       )
//         }
//       </ul>
//     </div>
//   );
// }
// export default App;
//lifting up
// import { useState } from "react";
// function MyForm({text, settext, label})
// {
//     return(
//       <div>
//         <h3>{label}</h3>
//         <input value={text} onChange={(e)=>settext(e.target.value)}/>
//         <p>{text}</p>
//       </div>
//     );
// }
// export default MyForm;
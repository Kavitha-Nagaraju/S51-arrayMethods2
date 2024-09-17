import logo from './logo.svg';
import './App.css';

function App() {
  let moviesNames=["Akhil","Suswagatham","Annavaram","AAhvanam","Iddharammailatho","Keeravaani","Sammathame","SravanaMasam","AAhvanam"," Maa Annayya","AAkasamantha","Aswaddhama"];
  return (
    <div className="App">
   <button onClick={()=>{
          let movies=["Akashavaani","Aa Intlo"];
          let arr=moviesNames.concat(movies);
          console.log(arr);
          console.log(moviesNames.concat(movies));

   }}>Concate</button>
   <button onClick={()=>{
         let arr = moviesNames.fill("Kavitha",5,8);
         console.log(arr);
         console.log(moviesNames.fill("Anitha",7,10));
   }}>Fill</button>
   <button onClick={()=>{
     let string ="KAVITHA";
     console.log(Array.from(string));
     let array=Array.from(string);
     console.log(array);

       }}>Form</button>
   <button onClick={()=>{
     let cricket = ["siraj","aravindh","kohli"];
     let iplPlayers =["virat","dhoni","bumrah"];
     let  players =[["Amar","srija"],"anupam","akash"];

     let  team =[cricket,iplPlayers,players];
     console.log(team.flat);
     console.log(team.flat(2));
     console.log(team[2][0]);


        }}>Flat</button>
   <button onClick={()=>{
     console.log(moviesNames.includes("Iddharammailatho"));
     let movie = moviesNames.includes("Keeravaani");
     console.log(movie)
   }}>Includes</button>
   <button onClick={()=>{
      console.log(moviesNames);
      console.log(moviesNames.indexOf("Keeravaani"));
      let movie=moviesNames.indexOf("AAhvanam");
      console.log(movie);
   }}>IndexOf</button>
   <button onClick={()=>{
    console.log(moviesNames);
      let movie = moviesNames.lastIndexOf("AAhvanam");
      console.log(movie);
      console.log(moviesNames.lastIndexOf("AAhvanam"));
   }}>LastIndexOf</button>
   <button onClick={()=>{
    console.log(moviesNames);
       console.log(moviesNames.reverse())
   }}>Rerverse</button>
   <button onClick={()=>{
    console.log(moviesNames);
        delete moviesNames[8];
        console.log(moviesNames)
   }}>Delete</button>

   <button onClick={()=>{
    console.log(moviesNames)
     console.log(moviesNames.pop())
     console.log(moviesNames)
   }}>Pop</button>
   <button onClick={()=>{
    console.log(moviesNames)
    console.log(moviesNames.push("kavitha"))
    console.log(moviesNames)
   }}>Push</button>
   <button onClick={()=>{
    console.log(moviesNames)
    console.log(moviesNames.shift())
    console.group(moviesNames)
   }}>Shift</button>
   <button onClick={()=>{ 
    console.log(moviesNames)
    console.log(moviesNames.unshift("Anitha"));
    console.log(moviesNames)
   }}>Unshift</button>
   <button onClick={()=>{
    console.log(moviesNames)
    console.log(moviesNames.slice(9,12));

    
   }}>Slice</button>
   <button onClick={()=>{
    console.log(moviesNames)
    console.log(moviesNames.splice(3,0,"kavitha"));
    console.log(moviesNames.splice(6,3))
    console.log(moviesNames)
    console.log(moviesNames.splice(6,4,"Anitha","Kavitha","Siri","sushma"))
    console.log(moviesNames)
   }}>Splice</button>
   <button onClick={()=>{ 
    console.log(moviesNames)
    console.log(moviesNames.length());
   }}>Lenth</button>
   <button onClick={()=>{
    console.log(moviesNames);
    console.log(moviesNames.at[6]);
   }}>At</button>
   <button onClick={()=>{
    console.log(moviesNames)
    console.log(moviesNames[8]);
   }}>Select</button>
   <button onClick={()=>{
    for(let i=0;i<=moviesNames.length ;i++){
    console.log(moviesNames[i]);
    console.log([i]);
    }
   }}>For</button>
   <button onClick={()=>{
    console.log(moviesNames.length);
   }}>Lenth</button>
   <button onClick={()=>{
    console.log(moviesNames.join("<++++>"));
   }}>Join</button>
   <button onClick={()=>{
    console.log(moviesNames.toString());
   }}>ToString</button>
    </div>
  );
}

export default App;

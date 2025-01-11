import React, {useState} from "react";

function App() {

  const [fullName, setFNname] = useState({
    fName: "",
    lName: ""
  });

  function updateFullName(e) {
    const {name, value} = e.target;

    setFNname(prev => {
      if(name === "fName") {
        return {
          fName : value,
          lName : prev.lName
        };
      } else if(name === "lName") {
        return {
          fName : prev.fName,
          lName : value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName} </h1>
      <form>
        <input 
          name="fName" 
          onChange={updateFullName} 
          placeholder="First Name" 
          value={fullName.fName}
        />
        <input 
          name="lName" 
          onChange={updateFullName} 
          placeholder="Last Name" 
          value={fullName.lName}  
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

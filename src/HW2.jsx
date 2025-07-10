import React from "react";

const HW2 =()=>{
  return <Grandparent/>
}
function Grandparent(){
  const toy = "Robot";
  return <Parent toy={toy}/>;
}
function Parent({toy}){
  return <Child toy={toy}/>;
}
function Child({toy}){
  return <p>My toy is a:{toy}</p>
}

const ToyContext = React.createContext();
function Grandparent(){
    const toy = "Robot";
    return (
      <ToyContext.Provider value={toy}>
    <Parent/>;
    </ToyContext.Provider>
    )
  }
  function Parent(){
      return <Child />;
    }
    function Child(){
      const toy = React.useContext(ToyContext);
      return <p>My toy is a:{toy}</p>
    }

export default HW2   
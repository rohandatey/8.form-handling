import React, { useState } from "react";
import Cards from "./Components/Cards";
import Form from "./Components/Form";

const App = () => {
  const [users, setUsers] = useState([])

  const handleFormSubmitData = (data)=>{
    setUsers([...users,data])
  }
  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
      <div className="container mx-auto">
        <Cards users={users} />
        <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>
  );
};

export default App;

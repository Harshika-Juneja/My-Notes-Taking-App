import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import { useEffect, useState } from "react";
const App = () => {
  const[notes,setNotes]=useState(JSON.parse(localStorage.getItem('notes')) || []);
  console.log(notes);

  useEffect(() => {
    localStorage.setItem('notes',JSON.stringify(notes))//js to json obj
  },[notes])//dependency on notes array whenever state of notes changes func in effect is re-run 

  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route path="/create-note" element={<CreateNote setNotes={setNotes}/>} />
          <Route path="/edit-note/:id" element={<EditNote notes={notes}
          setNotes={setNotes}  />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;

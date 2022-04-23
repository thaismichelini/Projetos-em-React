import React, { useState } from "react";

import "./styles.css";

import { Card } from "../../Components/Card";

export function Home() {
  const [studentName, setStudantName] = useState('');
  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudents(prevState =>[...prevState, newStudent]);
  }

  
  return (
    <div className="container">
      <h1>Lista de Presença</h1>

      <input 
        type="text" 
        placeholder="Digite o nome..." 
        onChange={(e) => setStudantName (e.target.value)}
      />
      <button type="buttom" onClick={handleAddStudent}>
        Adicionar
      </button>
     
      {
        students.map(student =>  <Card name={student.name} time={student.time}/>)
      }  
    </div>
  );
}

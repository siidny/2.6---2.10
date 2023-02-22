import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ id: 1, name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("an new name...");

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      id: persons.length + 1,
    };

    const nameExists = persons.some((person) => person.name === newName);
    if (nameExists) {
      alert(`${newName} is already in the phone book`);
    } else {
      setPersons(persons.concat(nameObject));
      setNewName("");
    }
  };
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <input value={newName} onChange={handleNameChange} />
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((name) => (
          <li key={name.id}>{name.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

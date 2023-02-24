const Persons = ({ filteredPersons }) => {
  return (
    <ul>
      {filteredPersons.map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number}
        </li>
      ))}
    </ul>
  );
};

export default Persons;

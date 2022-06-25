import "./Subject.css";

const data = [
  { name: "1", age: "English", gender: "History" },
  { name: "2", age: "Mathematics", gender: "Geography" },
  { name: "3", age: "Physics", gender: "Social Studies" },
  { name: "4", age: "Biology", gender: "French" },
  { name: "5", age: "Basic Technology", gender: "Business Studies" },
  { name: "6", age: "ICT", gender: "	Christian Religious Studies" },
  { name: "7", age: "Igbo", gender: "	Civic Education" },
  { name: "8", age: "Yoruba", gender: " Economics" },
];

function Subjects() {
  return (
    <div className="subjects col-md-12 ">
      <table>
        <tr>
          <th>S/N</th>
          <th>CORE</th>
          <th>ELECTIVES</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
          );
        })}

      
       
      </table>
    </div>
  );
}

export default Subjects;

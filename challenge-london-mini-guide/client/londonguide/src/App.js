import Harrow from "./Harrow.json";
import Heathrow from "./Heathrow.json";
import Stratford from "./Stratford.json";
import PharmacyButton from "./Buttons/PharmacyButton.js";
import SchoolsColleges from "./Buttons/SchoolsColleges.js";
import Doctors from "./Buttons/Doctors.js";
import Hospitals from "./Buttons/Hospitals.js";

import "./App.css";

console.log(Harrow);
console.log(Heathrow);
console.log(Stratford);

function App(props) {
  // const handleClick = () => {
  //   console.log("clicked");
  // };

  return (
    <div className="App">
      <h1>City Mini Guide</h1>
      <hr />
      <div className="city-select">
        <label>Select a city : </label>
        <select>
          <option></option>
          <option>Harrow</option>
          <option>Heathrow</option>
          <option>Stratford</option>
        </select>
      </div>
      <hr />
      <div className="buttons">
        <PharmacyButton />
        <SchoolsColleges />
        <Doctors />
        <Hospitals />
      </div>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
          {/* {props.Harrow.map((data, index) => {
            return <ResultRow data={data} />;
          })} */}
        </tbody>
      </table>
    </div>
  );
}

// function ResultRow({ data }) {
//   return (
//     <tr onClick={() => {}}>
//       <td>{data.title}</td>
//     </tr>
//   );
// }

export default App;

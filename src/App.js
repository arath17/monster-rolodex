import "./App.css";
//import { Component } from "react";
import { CardList } from "./components/CardList";
import { SearchBox } from "./components/SearchBox";
import { useState, useEffect } from "react";

function App() {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  useEffect(() => {
    const fetchData = async () => {
      const data = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
      ).json();
      setMonsters(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    setFilteredMonsters(filteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox
        placeholder="Search Monsters"
        handleChange={(e) => setSearchField(e.target.value.toLowerCase())}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }
//   async componentDidMount() {
//     const users = await (
//       await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json();
//     this.setState({ monsters: users });
//   }
//   render() {
//     const { monsters, searchField } = this.state;
//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField.toLowerCase())
//     );
//     return (
//       <div className="App">
//         <h1>Monster Rolodex</h1>
//         <SearchBox
//           placeholder="Search Monsters"
//           handleChange={(e) => this.setState({ searchField: e.target.value })}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;

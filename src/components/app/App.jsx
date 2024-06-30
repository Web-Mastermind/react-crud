import AppFilter from "../app-filter/App-filter"
import AppInfo from "../app-info/App-info"
import EmployesAddForm from "../employes-add-form/employes-add-form"
import EmployesList from "../employes-list/employes-list"
import SearchPanel from "../search-panel/Search-panel"
import "./app.css"

const App = () => {
  const data = [
    { name: "John C.", salary: 800 },
    { name: "Alex M.", salary: 3000 },
    { name: "Carl W.", salary: 5000 }
  ];
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployesList data={data} />
      <EmployesAddForm />
    </div>
  )
}

export default App
import AppFilter from "../app-filter/App-filter"
import AppInfo from "../app-info/App-info"
import EmployesAddForm from "../employes-add-form/employes-add-form"
import EmployesList from "../employes-list/employes-list"
import SearchPanel from "../search-panel/Search-panel"
import "./app.css"

const App = () => {
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployesList />
      <EmployesAddForm />
    </div>
  )
}

export default App
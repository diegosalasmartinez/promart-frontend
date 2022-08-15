import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Customers from "./pages/customers"
import CreateCustomer from "./pages/create-customer"
import Customer from "./pages/customer"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Customers />} />
        <Route path="/agregar" element={<CreateCustomer />} />
        <Route path="/detalle-cliente/:id" element={<Customer />} />
      </Routes>
    </div>
  )
}

export default App

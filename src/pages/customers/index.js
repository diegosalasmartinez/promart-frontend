import { Container } from "@mui/material"
import { useFetchCustomers } from "../../hooks"
import Loading from "../../components/Loading"
import CustomersInfo from "./CustomersInfo"

const Customers = () => {
  const { customers, kpi, isLoading } = useFetchCustomers()

  return (
    <Container maxWidth="lg">
      {isLoading ? (
        <Loading />
      ) : (
        <CustomersInfo customers={customers} kpi={kpi} />
      )}
    </Container>
  )
}

export default Customers

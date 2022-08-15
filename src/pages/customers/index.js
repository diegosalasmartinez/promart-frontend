import { Container, Typography } from "@mui/material"
import { useFetchCustomers } from "../../hooks"
import CustomersTable from "./CustomersTable"

const Customers = () => {
  const { customers, kpi, isLoading } = useFetchCustomers()

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        component="div"
        sx={{ marginTop: "3rem", fontWeight: "700", color: "orange" }}
      >
        Lista de clientes
      </Typography>
      <CustomersTable customers={customers} />
    </Container>
  )
}

export default Customers

import { Container } from "@mui/material"
import { useFetchCustomer } from "../../hooks"
import { useParams } from "react-router-dom"
import Loading from "../../components/Loading"
import CustomerInfo from "./CustomerInfo"

const Customer = () => {
  const params = useParams()
  const { customer, deathDate, isLoading } = useFetchCustomer(params.id)

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <CustomerInfo customer={customer} deathDate={deathDate} />
      )}
    </Container>
  )
}

export default Customer

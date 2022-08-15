import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Container } from "@mui/material"
import CustomerForm from "./CustomerForm"
import Loading from "../../components/Loading"

const CreateCustomer = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const createCustomer = async (customer) => {
    setIsLoading(true)
    const customerToSend = {
      ...customer,
      birthday: customer.birthday.format()
    }
    await axios.post(
      process.env.REACT_APP_SERVER_URL + "/people",
      customerToSend
    )
    navigate("/")
  }

  return (
    <Container maxWidth="lg">
      {isLoading ? (
        <Loading />
      ) : (
        <CustomerForm createCustomer={createCustomer} />
      )}
    </Container>
  )
}

export default CreateCustomer

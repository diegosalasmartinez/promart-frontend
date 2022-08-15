import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Box, CircularProgress, Container } from "@mui/material"
import CustomerForm from "./CustomerForm"

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
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <CustomerForm createCustomer={createCustomer} />
      )}
    </Container>
  )
}

export default CreateCustomer

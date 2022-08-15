import React, { useState } from "react"
import { Box, Button, Grid, styled, TextField } from "@mui/material"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
import moment from 'moment'

const StyledTextField = styled(TextField)(() => ({
  'label': {
    fontSize: '16px'
  },
  'div': {
    fontSize: '16px'
  }
}))

const CustomerForm = (props) => {
  const [customer, setCustomer] = useState({
    name: "",
    lastName: "",
    age: 18,
    birthday: moment(new Date())
  })

  const onChangeInput = (e, label, isNumber = false) => {
    const value = isNumber ? parseInt(e.target.value) : e.target.value
    const newCustomer = { ...customer, [label]: value }
    setCustomer(newCustomer)
  }

  const onChangeDate = (e) => {
    const newCustomer = { ...customer, birthday: e }
    setCustomer(newCustomer)
  }

  return (
    <Box>
      <Grid container spacing={2} sx={{ paddingTop: "3rem" }}>
        <Grid item xs={6}>
          <StyledTextField
            id="name"
            label="Nombre"
            variant="outlined"
            fullWidth
            value={customer.name}
            onChange={(e) => onChangeInput(e, "name")}
          />
        </Grid>
        <Grid item xs={6}>
          <StyledTextField
            id="lastName"
            label="Apellido"
            variant="outlined"
            fullWidth
            value={customer.lastName}
            onChange={(e) => onChangeInput(e, "lastName")}
          />
        </Grid>
        <Grid item xs={6}>
          <StyledTextField
            id="age"
            label="Edad"
            variant="outlined"
            type="number"
            fullWidth
            value={customer.age}
            onChange={(e) => onChangeInput(e, "age", true)}
          />
        </Grid>
        <Grid item xs={6}>
          <DesktopDatePicker
            label="Fecha de nacimiento"
            mask=""
            inputFormat="DD/MM/YYYY"
            value={customer.birthday}
            onChange={onChangeDate}
            renderInput={(params) => <StyledTextField {...params} fullWidth />}
          />
        </Grid>
      </Grid>
      <Box
        sx={{ marginTop: "3rem", display: "flex", justifyContent: "center" }}
      >
        <Button
          variant="contained"
          sx={{ backgroundColor: "orange", fontSize: '16px' }}
          onClick={() => props.createCustomer(customer)}
        >
          Crear cliente
        </Button>
      </Box>
    </Box>
  )
}

export default CustomerForm

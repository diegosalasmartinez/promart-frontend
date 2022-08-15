import React from "react"
import { Box, Grid, styled, TextField, Typography } from "@mui/material"
import moment from "moment"

const StyledTextField = styled(TextField)(() => ({
  label: {
    fontSize: "16px"
  },
  div: {
    fontSize: "16px"
  }
}))

const CustomerInfo = (props) => {
  const { customer, deathDate } = props

  return (
    <Box>
      <Typography variant="h5" component="div" sx={{ textAlign: "center", marginTop: '3rem' }}>
        Fecha probable de muerte: <span style={{fontWeight: '700'}}>{moment(deathDate).format('DD/MM/YYYY')}</span>
      </Typography>
      <Grid container spacing={4} sx={{ paddingTop: "3rem" }}>
        <Grid item xs={6}>
          <StyledTextField
            id="name"
            label="Nombre"
            variant="outlined"
            fullWidth
            aria-readonly
            value={customer.name}
          />
        </Grid>
        <Grid item xs={6}>
          <StyledTextField
            id="lastName"
            label="Apellido"
            variant="outlined"
            fullWidth
            aria-readonly
            value={customer.lastName}
          />
        </Grid>
        <Grid item xs={6}>
          <StyledTextField
            id="age"
            label="Edad"
            variant="outlined"
            fullWidth
            aria-readonly
            value={customer.age}
          />
        </Grid>
        <Grid item xs={6}>
          <StyledTextField
            id="birthday"
            label="Fecha de nacimiento"
            variant="outlined"
            fullWidth
            aria-readonly
            value={moment(customer.birthday).format("DD/MM/yyyy")}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default CustomerInfo

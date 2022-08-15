import React from "react"
import { Box, Grid, styled, Typography } from "@mui/material"

const StyledBox = styled(Box)(({ theme }) => ({
  padding: "20px 40px",
  borderRadius: "20px",
  boxShadow: "0px 8px 10px -3px rgba(0,0,0,0.1)"
}))

const CustomersKpi = (props) => {
  const { kpi } = props
  const mean = Math.round(kpi.mean * 100) / 100
  const std = Math.round(kpi.std * 100) / 100

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <StyledBox>
          Promedio de edad: <span style={{ fontWeight: "700" }}>{mean}</span>
        </StyledBox>
      </Grid>
      <Grid item xs={6}>
        <StyledBox>
          Desviación estandar: <span style={{ fontWeight: "700" }}>{std}</span>
        </StyledBox>
      </Grid>
    </Grid>
  )
}

export default CustomersKpi

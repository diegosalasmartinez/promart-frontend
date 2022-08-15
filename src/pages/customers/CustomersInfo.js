import React from "react"
import { Box, Typography } from "@mui/material"
import CustomersTable from "./CustomersTable"
import CustomersKpi from "./CustomersKpi"

const CustomersInfo = (props) => {
  const { customers, kpi } = props

  return (
    <Box sx={{ paddingTop: "3rem" }}>
      <CustomersKpi kpi={kpi} />
      <Typography
        variant="h4"
        component="div"
        sx={{ marginTop: "3rem", fontWeight: "700", color: "orange" }}
      >
        Lista de clientes
      </Typography>
      <CustomersTable customers={customers} />
    </Box>
  )
}

export default CustomersInfo

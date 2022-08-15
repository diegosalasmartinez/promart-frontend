import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material"
import React from "react"
import moment from "moment"
import { Link } from "react-router-dom"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "orange",
    color: theme.palette.common.white,
    fontSize: 16,
    fontWeight: 700
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16
  }
}))

const CustomersTable = (props) => {
  const { customers = [] } = props

  return (
    <TableContainer component={Paper} sx={{ marginTop: "1.5rem" }}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell>Apellido</StyledTableCell>
            <StyledTableCell>Edad</StyledTableCell>
            <StyledTableCell>Fecha de nacimiento</StyledTableCell>
            <StyledTableCell>Opciones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell
                component="th"
                scope="row"
                sx={{ fontSize: "18px" }}
              >
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.lastName}</StyledTableCell>
              <StyledTableCell>{row.age}</StyledTableCell>
              <StyledTableCell>
                {moment(row.birthday).format("DD/MM/yyyy")}
              </StyledTableCell>
              <StyledTableCell><Link to={`detalle-cliente/${row._id}`}>Ver</Link></StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CustomersTable

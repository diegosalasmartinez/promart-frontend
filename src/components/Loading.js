import React from "react"
import { Box } from "@mui/material"
import { CircularProgress } from "@mui/material"

const Loading = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
      <CircularProgress style={{ color: "orange" }} />
    </Box>
  )
}

export default Loading

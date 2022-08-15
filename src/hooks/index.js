import { useEffect, useState } from "react"
import axios from "axios"

export const useFetchCustomers = () => {
  const [customers, setCustomers] = useState([])
  const [kpi, setKpi] = useState({ mean: 0, std: 0 })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const cancelToken = axios.CancelToken.source()

    axios
      .get(process.env.REACT_APP_SERVER_URL + "/customers", {
        cancelToken: cancelToken.token
      })
      .then((res) => {
        setCustomers(res.data.customers)
        setKpi({ mean: res.data.mean, std: res.data.std })
        setIsLoading(false)
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log(err)
        }
      })

    return () => {
      cancelToken.cancel()
    }
  }, [])

  return { customers, kpi, isLoading }
}

export const useFetchCustomer = (id) => {
  const [customer, setCustomer] = useState({})
  const [deathDate, setDeathDate] = useState(new Date())
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const cancelToken = axios.CancelToken.source()

    axios
      .get(process.env.REACT_APP_SERVER_URL + "/customers/" + id, {
        cancelToken: cancelToken.token
      })
      .then((res) => {
        setCustomer(res.data.customer)
        setDeathDate(res.data.deathDate)
        setIsLoading(false)
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log(err)
        }
      })

    return () => {
      cancelToken.cancel()
    }
  }, [id])

  return { customer, deathDate, isLoading }
}

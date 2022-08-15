import { useEffect, useState } from "react"
import axios from "axios"

export const useFetchCustomers = () => {
  const [customers, setCustomers] = useState([])
  const [kpi, setKpi] = useState({ mean: 0, std: 0 })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const cancelToken = axios.CancelToken.source()

    axios
      .get(process.env.REACT_APP_SERVER_URL + "/people", {
        cancelToken: cancelToken.token
      })
      .then((res) => {
        setCustomers(res.data.people)
        setKpi({ mean: res.data.mean, std: res.data.std })
        setIsLoading(true)
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

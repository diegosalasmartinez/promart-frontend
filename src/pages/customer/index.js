import { useLocation, useParams } from "react-router-dom"

const Customer = () => {
  const params = useParams()
  console.log(params);

  return <div>This is the customer</div>
}

export default Customer

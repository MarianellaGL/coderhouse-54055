import { render } from 'react-dom'

const ApprovalCard = (props) => {

  const data = {
    name: "cualquier cosa"
  }


  return props.render(data.name)
}

export default ApprovalCard;
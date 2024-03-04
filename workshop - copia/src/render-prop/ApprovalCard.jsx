import { render } from "react-dom";

const ApprovalCard = (props) => {
  const data = {
    name: "name"
  }

  return props.render(data.name)
}

export default ApprovalCard;
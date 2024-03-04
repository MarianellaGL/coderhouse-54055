export const withApprovalCard = BaseComponent => {
  const DerivedComponent = props => {
    const data = {
      name: "name"
    }
    return <BaseComponent name={data.name} {...props} />
  }

  return DerivedComponent
}

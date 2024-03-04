export const withApprovalCard = BaseComponent => {
  const DerivedComponent = props => {
    const data = {
      name: "Cualquier cosa"
    }
    return <BaseComponent name={data.name} {...props} />
  }
  return DerivedComponent;
}

//withApprovalCard tiene adentro CommentDetail y dentro de commentDetail se le manda la data que yo quiero obtener(en este caso)


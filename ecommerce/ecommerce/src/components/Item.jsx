export const Item = ({ item }) => {
  console.log(item)

  return (<>
    <div className="mx-auto my-auto">
      {item.nombre}
      {item.precio}
    </div>
  </>);

}
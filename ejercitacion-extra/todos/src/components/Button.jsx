
const Button = ({ color, children, callback }) => {
  return (
    <button className="button" style={{ backgroundColor: color }} onClick={callback}>
      {children}
    </button>
  )
}

export default Button
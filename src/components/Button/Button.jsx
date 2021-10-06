import "./Button.css"

export const Button = ({children, onClick}) => {
  return (
    <div>
      <button onClick={onClick} className="my-button">
          {children}
      </button>
    </div>
  )
}

export default Button

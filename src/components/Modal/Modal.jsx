import Portal from './Portal';
import "./Modal.css";
import Button from '../Button/Button';

const Modal = (props) => {

  const {children, toggle, active} = props;
    
  return (
    <Portal>
      {active && (
        <div className="modal-container">
          <div className="modal-box">
            {children}  
          </div>
          <Button className="close-button" onClick={toggle}>Cerrar</Button>
        </div>
      )}
    </Portal>
  )
}

export default Modal

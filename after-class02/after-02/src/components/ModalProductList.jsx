import styles from './ModalProductList.module.css';
import PropTypes from 'prop-types';

const ModalProductList = ({ selectedProduct, closeModal }) => {
  return (<div className={styles.modalOverlay} onClick={closeModal}>
    <div className={styles.modal}>
      <h2>{selectedProduct.nombreProducto}</h2>
      <p>Precio: {selectedProduct.precio}</p>
      <p>Descuento: {selectedProduct.tieneDescuento ? 'Sí' : 'No'}</p>
      <button onClick={closeModal}>Cerrar</button>
    </div>
  </div>);
}

ModalProductList.propTypes = {
  selectedProduct: PropTypes.shape({
    nombreProducto: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    tieneDescuento: PropTypes.bool
  }),
  closeModal: PropTypes.func.isRequired
}

export default ModalProductList;
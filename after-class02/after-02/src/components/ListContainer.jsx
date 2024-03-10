import { useEffect, useState } from 'react';
import { getProductosResolved } from '../Mock/AsyncMock';
import styles from '../components/ListContainer.module.css';
import ModalProductList from './ModalProductList';
import propTypes from 'prop-types';

const ListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProductosResolved().then(res => {
      setProducts(res);
      setLoading(false);
    });
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  if (loading) return <h1>Cargando...</h1>;

  return (
    <>
      <div className={styles.container}>
        <div>
          <div>
            <ul className={styles.ul}>
              {products.map(({ id, nombreProducto, precio, tieneDescuento }) => (
                <li className={styles.li} key={id} onClick={() => openModal({ id, nombreProducto, precio, tieneDescuento })}>
                  <span>{nombreProducto}</span>
                  <p>{precio}</p>
                  <p>{tieneDescuento}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {selectedProduct && (
        <ModalProductList selectedProduct={selectedProduct} closeModal={closeModal} />
      )}
    </>
  );
};


export default ListContainer;
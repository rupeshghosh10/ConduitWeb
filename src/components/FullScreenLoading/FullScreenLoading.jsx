import Loading from '../Loading/Loading';
import styles from './FullScreenLoading.module.css';

const FullScreenLoading = () => {
  return (
    <div className={`d-flex align-items-center justify-content-center w-100 h-100 position-absolute ${styles.loading}`}>
      <Loading width={100} />
    </div>
  );
}

export default FullScreenLoading;

import styles from "./loading.module.css";

const loadingPage = () => {
  return <p className={styles.loading}>Fetching meals...</p>;
};

export default loadingPage;

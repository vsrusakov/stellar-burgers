// import { ConstructorPage } from '@pages'; TODO: убрать
import '../../index.css';
import { TModalHandle } from '../modal/type';
import styles from './app.module.css';

import { AppHeader, Modal } from '@components';
// import { Preloader } from '@ui'; TODO: убрать
import { Outlet, useLocation, useMatches, useNavigate } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const matches = useMatches();

  const backgroundLocation = location.state?.backgroundLocation;

  const modalHandle = matches
    .map((match) => match.handle as TModalHandle)
    .find((handle) => handle?.title);

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className={styles.app}>
      <AppHeader />
      <Outlet />

      {backgroundLocation && modalHandle && (
        <Modal title={modalHandle.title} onClose={handleClose}>
          <Outlet />
        </Modal>
      )}
    </div>
  );
};

export default App;

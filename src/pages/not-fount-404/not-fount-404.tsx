import { FC } from 'react';
import styles from './not-found-404.module.css';

export const NotFound404: FC = () => (
  <h3 className={`${styles.textCenter} pb-6 text text_type_main-large`}>
    Страница не найдена. Ошибка 404.
  </h3>
);

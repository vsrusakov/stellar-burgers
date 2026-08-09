import { useDispatch, useSelector } from '../../services/store';
import {
  selectIngredients,
  selectLoadingStatus,
  selectIngredientsError
} from '../../services/burgerIngredientsSelectors';

import styles from './constructor-page.module.css';

import { FC, useEffect } from 'react';
import { ConstructorPageUI } from '@ui-pages';
import { fetchIngredients } from '../../services/burgerIngredientsSlice';
import { Preloader } from '@ui';

export const ConstructorPage: FC = () => {
  const dispatch = useDispatch();

  const loadingStatus = useSelector(selectLoadingStatus);
  const ingredients = useSelector(selectIngredients);
  const error = useSelector(selectIngredientsError);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  if (loadingStatus === 'loading') {
    return <Preloader />;
  }

  if (error && loadingStatus === 'failed') {
    return (
      <div className={`${styles.error} text text_type_main-medium pt-4`}>
        {error}
      </div>
    );
  }

  if (ingredients.length === 0 && loadingStatus === 'success') {
    return (
      <div className={`${styles.description} text text_type_main-medium pt-4`}>
        Нет игредиентов
      </div>
    );
  }

  return <ConstructorPageUI />;
};

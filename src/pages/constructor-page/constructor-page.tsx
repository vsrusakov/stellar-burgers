import { useSelector } from '../../services/store';

import styles from './constructor-page.module.css';

// import { BurgerIngredients } from '../../components'; TODO: убрать, когда будет готова страница конструктора
// import { BurgerConstructor } from '../../components';
// import { Preloader } from '../../components/ui';
import { FC } from 'react';
import { ConstructorPageUI } from '@ui-pages';

export const ConstructorPage: FC = () => {
  /** TODO: взять переменные из стора */
  const isIngredientsLoading = false;
  const ingredients = [];
  const error = null;

  if (error) {
    return (
      <div className={`${styles.error} text text_type_main-medium pt-4`}>
        {error}
      </div>
    );
  }

  if (ingredients.length === 0) {
    return (
      <div className={`${styles.description} text text_type_main-medium pt-4`}>
        Нет игредиентов
      </div>
    );
  }

  return <ConstructorPageUI isIngredientsLoading={isIngredientsLoading} />;
};

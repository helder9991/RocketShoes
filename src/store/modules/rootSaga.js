import { all } from 'redux-saga/effects';

// Importação do Sagas
import cart from './cart/sagas';

export default function* rootSaga() {
  return yield all([cart]);
}

import styles from "./buttons.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  Create,
  Find,
  Sort,
  Update,
  selectEr,
  selectInd,
  selectInT,
  selectOuT,
  setInT,
  setOuT,
  setEr,
} from "../..";

export const Buttons = () => {
  const inTask = useSelector(selectInT);
  const outTask = useSelector(selectOuT);
  const error = useSelector(selectEr);
  const ind = useSelector(selectInd);

  const dispatch = useDispatch();
  const setError = (er) => dispatch(setEr(er));
  const setInTask = (txt) => dispatch(setInT(txt));
  const setOutTask = (ar) => dispatch(setOuT(ar));

  const sortTask = () => Sort(outTask, setOutTask);
  const findTask = () => Find(inTask, outTask, setError, setOutTask);
  const createTask = () => Create(inTask, setError, setInTask);
  const updTask = () => Update(ind, inTask, setError, setInTask);
  return (
    <div className={styles.buttons}>
      <button
        disabled={!inTask || error}
        className={styles.сButton}
        onClick={createTask}
      >
        Добавить
      </button>
      <button disabled={!outTask} onClick={sortTask} className={styles.sButton}>
        Упорядочить
      </button>
      <button disabled={!inTask} onClick={findTask} className={styles.fButton}>
        Найти
      </button>
      <button
        disabled={!inTask || error}
        onClick={updTask}
        className={styles.uButton}
      >
        Изменить
      </button>
    </div>
  );
};

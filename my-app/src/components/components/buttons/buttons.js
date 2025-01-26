import styles from './buttons.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
	Create,
	Find,
	Sort,
	Update,
	selectEr,
	selectInd,
	selectInT,
	selectOuT,
} from '../..';

export const Buttons = () => {
	const inTask = useSelector(selectInT);
	const outTask = useSelector(selectOuT);
	const error = useSelector(selectEr);
	const ind = useSelector(selectInd);

	const dispatch = useDispatch();
	const createTask = () => dispatch(Create(inTask));
	const updTask = () => dispatch(Update(ind, inTask));
	const sortTask = () => Sort(outTask, dispatch);
	const findTask = () => Find(inTask, outTask, dispatch);

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

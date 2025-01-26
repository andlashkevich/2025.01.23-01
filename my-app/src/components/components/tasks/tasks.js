import styles from './tasks.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Delete, Fix, selectOuT, setInT, setI, setOuT } from '../..';

export const Tasks = () => {
	const outTask = useSelector(selectOuT);
	const dispatch = useDispatch();
	const setOutTask = (ar) => dispatch(setOuT(ar));
	const setInTask = (txt) => dispatch(setInT(txt));
	const setInd = (i) => dispatch(setI(i));

	const delTask = (e) => Delete(e, outTask, setOutTask);
	const fixTask = (e) => Fix(e, outTask, setInd, setInTask);

	return (
		<ol className={styles.ol}>
			{outTask.map((it, id) => {
				return (
					<div className={styles.tasks} key={id}>
						<li onClick={fixTask} className={styles.uncheck}>
							{it.task}
						</li>
						<button onClick={delTask} className={styles.del}>
							Удалить
						</button>
					</div>
				);
			})}
		</ol>
	);
};

import styles from './tasks.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Delete, Fix, selectOuT, setInT } from '../../../components';

export const Tasks = ({ refresh, setRefresh, setInd }) => {
	const dispatch = useDispatch();
	// const inTask = useSelector(selectInT);
	const outTask = useSelector(selectOuT);
	// const error = useSelector(selectEr);
	// const setError = (er) => dispatch(setEr(er));
	const setInTask = (txt) => dispatch(setInT(txt));
	// const setOutTask = (ar) => dispatch(setOuT(ar));
	// const { setInTask, outTask } = useContext(AppContext);
	const delTask = (e) => Delete(e, outTask, refresh, setRefresh);
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

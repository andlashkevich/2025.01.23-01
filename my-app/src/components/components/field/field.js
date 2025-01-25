import styles from './field.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { ChgInp, selectEr, selectInT, selectOuT, setEr, setInT } from '../..';

export const Field = () => {
	const inTask = useSelector(selectInT);
	const outTask = useSelector(selectOuT);
	const error = useSelector(selectEr);

	const dispatch = useDispatch();
	const setError = (er) => dispatch(setEr(er));
	const setInTask = (txt) => dispatch(setInT(txt));

	const ChangeInput = ({ target }) => ChgInp({ target }, outTask, setError, setInTask);

	return (
		<div className={styles.field}>
			{error ? <div className={styles.error}>{error}</div> : null}
			<textarea
				name="newTask"
				value={inTask}
				onChange={ChangeInput}
				className={styles.input}
				placeholder="1.Введите новую задачу или словосочетание для поиска существующей. 2.Для исправления имеющейся задачи нажмите на неё и внесите желаемое изменение в этом поле. 3.Ввод пустого значения или задачи длиной более 100 знаков неприемлем. 4.Если задача уже есть в списке, ввести её еще раз не получится."
				autoFocus={true}
				autoComplete="on"
			></textarea>
			<button
				onClick={() => {
					setInTask('');
					setError(null);
				}}
				className={styles.xBut}
			>
				X
			</button>
		</div>
	);
};

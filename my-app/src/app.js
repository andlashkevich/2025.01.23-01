import styles from './app.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { GetTsk, Buttons, Field, Head, Tasks, selectInT, setOuT } from './components';

export function App() {
	const dispatch = useDispatch();
	const inTask = useSelector(selectInT);
	const setOutTask = (ar) => dispatch(setOuT(ar));
	GetTsk(inTask, setOutTask);

	return (
		<div className={styles.wrap}>
			<Head />
			<Field />
			<Buttons />
			<Tasks />
		</div>
	);
}

export default App;

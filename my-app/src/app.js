import styles from './app.module.css';
import { useDispatch } from 'react-redux';
import { GetTsk, Buttons, Field, Head, Tasks } from './components';

export function App() {
	const dispatch = useDispatch();
	dispatch(GetTsk());

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

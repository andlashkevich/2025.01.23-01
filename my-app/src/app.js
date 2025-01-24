import styles from './app.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
	GetTsk,
	Buttons,
	Field,
	Head,
	Tasks,
	selectEr,
	selectInT,
	setEr,
	setOuT,
} from './components';

export function App() {
	const dispatch = useDispatch();
	const inTask = useSelector(selectInT);
	const error = useSelector(selectEr);
	const setError = (er) => dispatch(setEr(er));
	const setOutTask = (txt) => dispatch(setOuT(txt));

	const [ind, setInd] = useState('');
	const [refresh, setRefresh] = useState(false);

	GetTsk(inTask, refresh, setOutTask);

	return (
		<div className={styles.wrap}>
			<Head />
			<Field error={error} setError={setError} />
			<Buttons error={error} setError={setError} ind={ind} />
			<Tasks refresh={refresh} setRefresh={setRefresh} setInd={setInd} />
		</div>
	);
}

export default App;

import { AppContext } from './context';
import styles from './app.module.css';
// import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';
import { GetTsk, Buttons, Field, Head, Tasks } from './components';

export function App() {
	const [inTask, setInTask] = useState('');
	const [outTask, setOutTask] = useState([]);
	const [error, setError] = useState(null);
	const [ind, setInd] = useState('');
	const [refresh, setRefresh] = useState(false);

	GetTsk(inTask, refresh, setOutTask);

	return (
		<AppContext.Provider value={{ inTask, setInTask, outTask, setOutTask }}>
			<div className={styles.wrap}>
				<Head />
				<Field error={error} setError={setError} />
				<Buttons error={error} setError={setError} ind={ind} />
				<Tasks refresh={refresh} setRefresh={setRefresh} setInd={setInd} />
			</div>
		</AppContext.Provider>
	);
}

export default App;

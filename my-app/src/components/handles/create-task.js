import { setEr, setInT, setOuT } from '../../components';

export const Create = (inTask) => (dispatch) => {
	fetch('http://localhost:3003/tasks', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
		body: JSON.stringify({ task: inTask }),
	}).finally(() => {
		fetch('http://localhost:3003/tasks')
			.then((rsp) => rsp.json())
			.then((dt) => {
				dispatch(setOuT(dt));
			});
		dispatch(setInT(''));
		dispatch(setEr(null));
	});
};

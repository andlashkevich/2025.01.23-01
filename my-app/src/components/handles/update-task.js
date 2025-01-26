import { setOuT, setInT, setEr } from '../../components';

export const Update = (ind, inTask) => (dispatch) => {
	fetch(`http://localhost:3003/tasks/${ind}`, {
		method: 'PUT',
		body: JSON.stringify({ task: inTask }),
		headers: {
			'content-Type': 'application/json; charset=utf-8',
		},
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

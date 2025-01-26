import { setOuT } from '../../components';

export const Delete = (e, outTask) => (dispatch) => {
	let id = outTask.find(
		(it) => it.task === e.target.previousElementSibling.innerText,
	).id;
	fetch(`http://localhost:3003/tasks/${id}`, { method: 'DELETE' }).finally(() => {
		fetch('http://localhost:3003/tasks')
			.then((rsp) => rsp.json())
			.then((dt) => {
				dispatch(setOuT(dt));
			});
	});
};

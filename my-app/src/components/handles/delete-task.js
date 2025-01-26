export const Delete = (e, outTask, setOutTask, setInTask) => {
	let id = outTask.find(
		(it) => it.task === e.target.previousElementSibling.innerText,
	).id;
	fetch(`http://localhost:3003/tasks/${id}`, {
		method: 'DELETE',
	}).finally(() => {
		fetch('http://localhost:3003/tasks')
			.then((rsp) => rsp.json())
			.then((dt) => {
				setOutTask(dt);
			});
	});
};

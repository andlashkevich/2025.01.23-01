export const ChgInp = ({ target }, outTask, setError, setInTask) => {
	setInTask(target.value);

	if (outTask.find((it) => it.task.toLowerCase() === target.value.toLowerCase()))
		setError('Такая задача уже существует');
	if (target.value.length > 100) setError('Слишком длинная задача');
};

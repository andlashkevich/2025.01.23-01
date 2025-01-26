import { setInT, setEr } from '../../components';

export const ChgInp = ({ target }, outTask, dispatch) => {
	dispatch(setInT(target.value));
	if (outTask.find((it) => it.task.toLowerCase() === target.value.toLowerCase()))
		dispatch(setEr('Такая задача уже существует'));
	if (target.value.length > 100) dispatch(setEr('Слишком длинная задача'));
};

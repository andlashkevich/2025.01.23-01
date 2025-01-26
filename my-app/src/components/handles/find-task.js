import { setOuT, setEr } from '../../components';

export const Find = (inTask, outTask, dispatch) => {
	let a = [];
	a = outTask.filter((it) => it.task.toLowerCase().includes(inTask.toLowerCase()));
	inTask && a.length > 0
		? dispatch(setOuT(a))
		: dispatch(setEr('Поиск не дал результатов'));
};

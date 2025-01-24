// import { selectOuT, setInT, setEr } from '../../components';
// import { useSelector, useDispatch } from 'react-redux';

export const ChgInp = ({ target }, outTask, setError, setInTask) => {
	// const outTask = useSelector(selectOuT);
	// const setError = (er) => dispatch(setEr(er));
	// const setInTask = (txt) => dispatch(setInT(txt));
	setInTask(target.value);

	// if (outTask.find((it) => it.task.toLowerCase() === target.value.toLowerCase()))
	// 	setError('Такая задача уже существует');
	if (target.value.length > 100) setError('Слишком длинная задача');
};

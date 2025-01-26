import { setOuT } from '../../components';

export const Sort = (outTask, dispatch) => {
	dispatch(
		setOuT(
			[...outTask].sort((a, b) =>
				a.task.toLowerCase() > b.task.toLowerCase() ? 1 : -1,
			),
		),
	);
};

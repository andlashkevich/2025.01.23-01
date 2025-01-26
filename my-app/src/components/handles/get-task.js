import { setOuT } from '../../components';

export const GetTsk = () => (dispatch) => {
	fetch('http://localhost:3003/tasks')
		.then((rsp) => rsp.json())
		.then((dt) => {
			dispatch(setOuT(dt));
		});
};

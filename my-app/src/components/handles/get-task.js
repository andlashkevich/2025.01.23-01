import { useEffect } from 'react';

export const GetTsk = (inTask, setOutTask) => {
	useEffect(() => {
		fetch('http://localhost:3003/tasks')
			.then((rsp) => rsp.json())
			.then((dt) => {
				setOutTask(dt);
			});
	}, [inTask, setOutTask]);
};

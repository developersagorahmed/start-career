import { useEffect, useState } from "react";

const dataJob = () => {
	const [jobData, setJobData] = useState([]);
	useEffect(() => {
		fetch("jobData.json")
			.then((res) => res.json())
			.then((data) => setJobData(data));
	}, []);
	return jobData;
};

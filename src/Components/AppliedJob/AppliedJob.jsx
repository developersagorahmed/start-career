import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Scart from "../Scart/Scart";

const AppliedJob = () => {
	const idd = JSON.parse(localStorage.getItem("id"));
	const [search, setSearch] = useState("");

	// console.log(search,"");

	return (
		<div>
			<div className="mt-10 flex justify-end mr-[100px] ">
				<select
					onChange={(e) => setSearch(e.target.value)}
					className=" bg-base-200 border-2 border-purple-500 w-32  mb-2 mt-2 py-2 px-3 rounded font-semibold text-lg text-left"
				>
					<option value="onsite">Onsite</option>
					<option value="remote">Remote</option>
				</select>
			</div>

			{idd
				?.filter((item) => {
					return search.toLocaleLowerCase() == ""
						? item
						: item.jobResponsibility.toLocaleLowerCase().includes(search);
				})
				?.map((data) => (
					<Scart key={data.id} jobData={data}></Scart>
				))}

			{/* {idd?.map((data) => (
				<Scart key={data.id} jobData={data}></Scart>
			))} */}
		</div>
	);
};

export default AppliedJob;

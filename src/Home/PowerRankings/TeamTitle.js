import React from 'react'


const  TeamTitle = (props) => {
	return (
		<div className="team-title">
			<div className="rank">{props.rank}</div>
			<div className="name"><b>{props.name}</b></div>
			<div className="record">
				Record: {props.record}
			</div>
		</div>
	);
}
export default TeamTitle;
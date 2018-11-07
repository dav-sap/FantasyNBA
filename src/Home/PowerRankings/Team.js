import React from 'react'
import TeamInfo from "./TeamInfo/TeamInfo";
import TeamTitle from "./TeamTitle";


const  Team = (props) => {
	return (
		<div className="team">
			<TeamTitle rank={props.rank} record={props.record} name={props.name}/>
			<TeamInfo {...props}/>
			<div className="team-analysis">
				{props.text} <span className="analysis-author">{props.author ? "--" + props.author: ""}</span>
			</div>
			<hr/>
		</div>
	);
}
export default Team;
import React from 'react'
import TeamInfo from "./TeamInfo/TeamInfo";
import TeamTitle from "./TeamTitle";


const  Team = (props) => {
	return (
		<div className="team">
			<TeamTitle rank={props.rank} record={props.record} name={props.name}/>
			<TeamInfo {...props}/>
			<div className="team-analysis">
				{props.text_2 ? <div>{props.text_2}</div> : ""}
				{props.author ?
				<div className="author-title">
					{`הטור של ${props.author}`}
				</div> : ""}

				{props.text}
			</div>
			<hr/>
		</div>
	);
}
export default Team;
import React from 'react'

const getArrowImg = (prevRank, nextRank) => {
	if (!prevRank) {
		return "same";
	}
	if (prevRank === nextRank) {
		return "same";
	}
	if (prevRank < nextRank) {
		return "down"
	}
	return "up"
}

const TeamInfo = (props) => {
	return (
		<div className="team-info">
			<table className="team-info-table">
			<thead>
				<tr>
					<th>PREV. RANK</th>
					<th>LAST WEEK</th>
					<th>THIS WEEK</th>
				</tr>
			</thead>
			<tbody>
				<tr className="last">
					<td className="prevrank-cell">{props.prevRank ? props.prevRank : props.rank}<img className="arrow-img" alt="arrow-img" src={"/arrow-" + (getArrowImg(props.prevRank, props.rank)) + ".png"} width="17"/></td>
					<td>{props.score}</td>
					<td>{props.nextMatch}</td>
				</tr>
			</tbody>
			</table>
		</div>
	);
}
export default TeamInfo;
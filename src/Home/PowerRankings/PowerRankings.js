import React, {PureComponent} from 'react';
import {WEEK_1, WEEK_2, WEEK_3, WEEK_4} from "./PowerRankingsConst";
import './power-rankings.css'
import Team from "./Team";

class PowerRankings extends PureComponent {
	render() {
		return (
			<div className="power-rankings-container">
				<img src="/power-rankings-logo-cut.png" alt="power-rankings" className="power-rankings-logo"/>
				<div className="power-rankings-body">
					{WEEK_4.sort((team1, team2) => team2.rank - team1.rank).map(team =>
						<Team key={team.name} {...team}/>
					)}
				</div>
			</div>
		);
	}
}

export default PowerRankings;
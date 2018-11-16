import React, {PureComponent} from 'react';
import {POWER_RANKINGS_BY_WEEK} from "./PowerRankingsConst";
import { Tabs } from 'antd';
import './power-rankings.css'
import Team from "./Team";

const TabPane = Tabs.TabPane;

class PowerRankings extends PureComponent {
	render() {
		return (
			<div className="power-rankings-container">
				<img src="/power-rankings-logo-cut.png" alt="power-rankings" className="power-rankings-logo"/>
				<Tabs defaultActiveKey={(POWER_RANKINGS_BY_WEEK.length).toString()}>
					{POWER_RANKINGS_BY_WEEK.map((powerRankings, index) => {
						return <TabPane tab={`Week ${index + 1}`} key={(index + 1).toString()}>
							<div className="power-rankings-body">
								{powerRankings.sort((team1, team2) => team2.rank - team1.rank).map(team =>
									<Team key={team.name} {...team}/>
								)}
							</div>
						</TabPane>
					})
					}
				</Tabs>
			</div>
		);
	}
}

export default PowerRankings;
import React, {PureComponent} from 'react';
import {Button, Select} from 'antd';
import PowerRankings from "./PowerRankings/PowerRankings";

const PREMEIRE_LEAGUE_TEAMS = [
	"The Truth",
	"Lior's molesters",
	"The Pickles",
	"Melout",
	"Ninja Turtles",
	"Los Yellow Hermanos",
	"the boondock sluts",
	"marc's faliure",
	"Just Jew it",
	"Eli's Cupcakes",
	"Oren Juice",
	"Yuval's Primo Team"
]


const LEAGUE__2_TEAMS = [
	"Guy's Qualiteam",
	"TuneSquad",
	"Dor's Dandy Team",
	"LegBreakers",
	"erel's Team",
	"The Process",
	"yunger team",
	"Elitzur NBA",
]

const Option = Select.Option;

class Home extends PureComponent {

	state = {
		league: null
	}
	handleLeagueChange = league => {
		this.setState({
			league
		})
	}
	getTeams = () => {
		const teams = this.state.league === "league1" ? PREMEIRE_LEAGUE_TEAMS : LEAGUE__2_TEAMS;
		return teams.map(team => <Option key={team}>{team}</Option>)
	}

	handleTeamChange = (teams) => {

	}
	render() {
		return (
			<div className="home">
				<PowerRankings/>
				<div className="stats-wrapper">
					<Button className={"league-button" + (this.state.league === "league1" ? " league-button-selected" : "")}
							loading={false} onClick={() => this.handleLeagueChange("league1")}>Shmurda Premier League</Button>
					<Button className={"league-button" + (this.state.league === "league2" ? " league-button-selected" : "")}
							loading={false} onClick={() => this.handleLeagueChange("league2")}>Shmurda Ligue 2</Button>
					{this.state.league ?
						<Select
							mode="multiple"
							className="team-select"
							placeholder="Please select teams to view their stats"
							onChange={this.handleTeamChange}
						>
							{this.getTeams()}
						</Select> : ""}
				</div>
			</div>
		);
	}
}


export default Home;
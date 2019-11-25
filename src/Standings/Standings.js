import React from 'react';
import './Standings.css'
import axios from 'axios';
import {ATL, BKN, BOS, CHA, CHI, CLE, DAL, DEN, DET, GSW, HOU, IND, LAC, LAL, MEM, MIA, MIL, MIN, NOP, NYK, OKC, ORL, PHI, PHX, POR, SAC, SAS, TOR, UTA, WAS} from 'react-nba-logos';


export default class Standings extends React.Component {
    constructor() {
        super()

        this.state = {
            standings: []
        }
    }

    async componentDidMount() {
        const webApiUrl = "https://api.mysportsfeeds.com/v1.2/pull/nba/2019-2020-regular/conference_team_standings.json";
        const apikey_token = process.env.REACT_APP_API_TOKEN;
        const password = process.env.REACT_APP_PASSWORD;
        let res = await axios.get(webApiUrl, {
            headers: {
                Authorization: "Basic " + btoa(apikey_token + ":" + password)
            }
        });
          
        console.log(res)

        this.setState({
            standings: res.data.conferenceteamstandings
        })
    }

    render() {
        return (
            <section class="standings-section">
		        <h2>Standings</h2>
		        <div class="west-standings">
			        <h3>West</h3>
			            <ul class="teams">
				            <li>1. *<DAL size={50} />Dallas Mavericks (0 - 0)</li>
				            <li>2. *<DEN size={50} />Denver Nuggets (0 - 0)</li>
				            <li>3. <GSW size={50} />Golden State Warriors (0 - 0)</li>
				            <li>4. **<HOU size={50} />Houston Rockets (0 - 0)</li>
				            <li>5. <LAC size={50} />Los Angeles Clippers (0 - 0)</li>
				            <li>6. <LAL size={50} />Los Angeles Lakers (0 - 0)</li>
				            <li>7. <MEM size={50} />Memphis Grizzlies (0 - 0)</li>
				            <li>8. <MIN size={50} />Minnesota Timberwolves (0 - 0)</li>
				            <li>9. <NOP size={50} />New Orleans Pelicans (0 - 0)</li>
				            <li>10. <OKC size={50} />Oklahoma City Thunder (0 - 0)</li>
				            <li>11. <PHX size={50} />Phoenix Suns (0 - 0)</li>
				            <li>12. <POR size={50} />Portland Trailblazers (0 - 0)</li>
				            <li>13. <SAC size={50} />Sacramento Kings (0 - 0)</li>
				            <li>14. <SAS size={50} />San Antonio Spurs (0 - 0)</li>
				            <li>15. <UTA size={50} />Utah Jazz (0 - 0)</li>
			            </ul>
		            </div>
		            <div class="east-standings">
			            <h3>East</h3>
			            <ul class="teams">
				            <li>1. **<ATL size={50} />Atlanta Hawks (0 - 0)</li>
				            <li>2. *<BOS size={50} />Boston Celtics (0 - 0)</li>
				            <li>3. *<BKN size={50} />Brooklyn Nets (0 - 0)</li>
				            <li>4. <CHA size={50} />Charlotte Hornets (0 - 0)</li>
				            <li>5. <CHI size={50} />Chicago Bulls (0 - 0)</li>
				            <li>6. <CLE size={50} />Cleveland Cavaliers (0 - 0)</li>
				            <li>7. <DET size={50} />Detroit Pistons (0 - 0)</li>
				            <li>8. <IND size={50} />Indiana Pacers (0 - 0)</li>
				            <li>9. <MIA size={50} />Miami Heats (0 - 0)</li>
				            <li>10. <MIL size={50} />Milwaukee Bucks (0 - 0)</li>
				            <li>11. <NYK size={50} />New York Knicks (0 - 0)</li>
				            <li>12. <ORL size={50} />Orlando Magic (0 - 0)</li>
				            <li>13. <PHI size={50} />Philidephia 76ers (0 - 0)</li>
				            <li>14. <TOR size={50} />Toronto Raptors (0 - 0)</li>
				            <li>15. <WAS size={50} />Washington Wizards (0 - 0)</li>
			            </ul>
		            </div>
	            </section>
        )
    }
}
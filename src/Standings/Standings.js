import React from 'react';
import './Standings.css'
import axios from 'axios';

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
				            <li>1. *Dallas Mavericks (0 - 0)</li>
				            <li>2. *Denver Nuggets (0 - 0)</li>
				            <li>3. Golden State Warriors (0 - 0)</li>
				            <li>4. **Houston Rockets (0 - 0)</li>
				            <li>5. Los Angeles Clippers (0 - 0)</li>
				            <li>6. Los Angeles Lakers (0 - 0)</li>
				            <li>7. Memphis Grizzlies (0 - 0)</li>
				            <li>8. Minnesota Timberwolves (0 - 0)</li>
				            <li>9. New Orleans Pelicans (0 - 0)</li>
				            <li>10. Oklahoma City Thunder (0 - 0)</li>
				            <li>11. Phoenix Suns (0 - 0)</li>
				            <li>12. Portland Trailblazers (0 - 0)</li>
				            <li>13. Sacramento Kings (0 - 0)</li>
				            <li>14. San Antonio Spurs (0 - 0)</li>
				            <li>15. Utah Jazz (0 - 0)</li>
			            </ul>
		            </div>
		            <div class="east-standings">
			            <h3>East</h3>
			            <ul class="teams">
				            <li>1. **Atlanta Hawks (0 - 0)</li>
				            <li>2. *Boston Celtics (0 - 0)</li>
				            <li>3. *Brooklyn Nets (0 - 0)</li>
				            <li>4. Charlotte Hornets (0 - 0)</li>
				            <li>5. Chicago Bulls (0 - 0)</li>
				            <li>6. Cleveland Cavaliers (0 - 0)</li>
				            <li>7. Detroit Pistons (0 - 0)</li>
				            <li>8. Indiana Pacers (0 - 0)</li>
				            <li>9. Miami Heats (0 - 0)</li>
				            <li>10. Milwaukee Bucks (0 - 0)</li>
				            <li>11. New York Knicks (0 - 0)</li>
				            <li>12. Orlando Magic (0 - 0)</li>
				            <li>13. Philidephia 76ers (0 - 0)</li>
				            <li>14. Toronto Raptors (0 - 0)</li>
				            <li>15. Washington Wizards (0 - 0)</li>
			            </ul>
		            </div>
	            </section>
        )
    }
}
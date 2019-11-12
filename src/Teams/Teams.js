import React from 'react';
import './Teams.css'
import {ATL, BKN, BOS, CHA, CHI, CLE, DAL, DEN, DET, GSW, HOU, IND, LAC, LAL, MEM, MIA, MIL, MIN, NOP, NYK, OKC, ORL, PHI, PHX, POR, SAC, SAS, TOR, UTA, WAS} from 'react-nba-logos';

export default class Teams extends React.Component {
    render() {
        return (
            <section className="teams-section">
                <div className="west-teams">
                    <h3>West</h3>
                    <ul class="teams">
                        <li><DAL size={50} />Dallas Mavericks</li>
                        <li><DEN size={50} />Denver Nuggets</li>
                        <li><GSW size={50} />Golden State Warriors</li>
                        <li><HOU size={50} />Houston Rockets</li>
                        <li><LAC size={50} />Los Angeles Clippers</li>
                        <li><LAL size={50} />Los Angeles Lakers</li>
                        <li><MEM size={50} />Memphis Grizzlies</li>
                        <li><MIN size={50} />Minnesota Timberwolves</li>
                        <li><NOP size={50} />New Orleans Pelicans</li>
                        <li><OKC size={50} />Oklahoma City Thunder</li>
                        <li><PHX size={50} />Phoenix Suns</li>
                        <li><POR size={50} />Portland Trailblazers</li>
                        <li><SAC size={50} />Sacramento Kings</li>
                        <li><SAS size={50} />San Antonio Spurs</li>
                        <li><UTA size={50} />Utah Jazz</li>
                    </ul>
                </div>
                <div className="east-teams">
                    <h3>East</h3>
                    <ul class="teams">
                        <li><ATL size={50} />Atlanta Hawks</li>
                        <li><BOS size={50} />Boston Celtics</li>
                        <li><BKN size={50} />Brooklyn Nets</li>
                        <li><CHA size={50} />Charlotte Hornets</li>
                        <li><CHI size={50} />Chicago Bulls</li>
                        <li><CLE size={50} />Cleveland Cavaliers</li>
                        <li><DET size={50} />Detroit Pistons</li>
                        <li><IND size={50} />Indiana Pacers</li>
                        <li><MIA size={50} />Miami Heats</li>
                        <li><MIL size={50} />Milwaukee Bucks</li>
                        <li><NYK size={50} />New York Knicks</li>
                        <li><ORL size={50} />Orlando Magic</li>
                        <li><PHI size={50} />Philidephia 76ers</li>
                        <li><TOR size={50} />Toronto Raptors</li>
                        <li><WAS size={50} />Washington Wizards</li>
                    </ul>
                </div>
            </section>
        )
    }
}
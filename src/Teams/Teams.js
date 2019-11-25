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
                        <li><a href="https://stats.nba.com/team/1610612742/" rel="noopener noreferrer" target="_blank"><DAL size={50} />Dallas Mavericks</a></li>
                        <li><a href="https://stats.nba.com/team/1610612743/" rel="noopener noreferrer" target="_blank"><DEN size={50} />Denver Nuggets</a></li>
                        <li><a href="https://stats.nba.com/team/1610612744/" rel="noopener noreferrer" target="_blank"><GSW size={50} />Golden State Warriors</a></li>
                        <li><a href="https://stats.nba.com/team/1610612745/" rel="noopener noreferrer" target="_blank"><HOU size={50} />Houston Rockets</a></li>
                        <li><a href="https://stats.nba.com/team/1610612746/" rel="noopener noreferrer" target="_blank"><LAC size={50} />Los Angeles Clippers</a></li>
                        <li><a href="https://stats.nba.com/team/1610612747/" rel="noopener noreferrer" target="_blank"><LAL size={50} />Los Angeles Lakers</a></li>
                        <li><a href="https://stats.nba.com/team/1610612763/" rel="noopener noreferrer" target="_blank"><MEM size={50} />Memphis Grizzlies</a></li>
                        <li><a href="https://stats.nba.com/team/1610612750/" rel="noopener noreferrer" target="_blank"><MIN size={50} />Minnesota Timberwolves</a></li>
                        <li><a href="https://stats.nba.com/team/1610612740/" rel="noopener noreferrer" target="_blank"><NOP size={50} />New Orleans Pelicans</a></li>
                        <li><a href="https://stats.nba.com/team/1610612760/" rel="noopener noreferrer" target="_blank"><OKC size={50} />Oklahoma City Thunder</a></li>
                        <li><a href="https://stats.nba.com/team/1610612756/" rel="noopener noreferrer" target="_blank"><PHX size={50} />Phoenix Suns</a></li>
                        <li><a href="https://stats.nba.com/team/1610612757/" rel="noopener noreferrer" target="_blank"><POR size={50} />Portland Trailblazers</a></li>
                        <li><a href="https://stats.nba.com/team/1610612758/" rel="noopener noreferrer" target="_blank"><SAC size={50} />Sacramento Kings</a></li>
                        <li><a href="https://stats.nba.com/team/1610612759/" rel="noopener noreferrer" target="_blank"><SAS size={50} />San Antonio Spurs</a></li>
                        <li><a href="https://stats.nba.com/team/1610612762/" rel="noopener noreferrer" target="_blank"><UTA size={50} />Utah Jazz</a></li>
                    </ul>
                </div>
                <div className="east-teams">
                    <h3>East</h3>
                    <ul class="teams">
                        <li><a href="https://stats.nba.com/team/1610612737/" rel="noopener noreferrer" target="_blank"><ATL size={50} />Atlanta Hawks</a></li>
                        <li><a href="https://stats.nba.com/team/1610612738/" rel="noopener noreferrer" target="_blank"><BOS size={50} />Boston Celtics</a></li>
                        <li><a href="https://stats.nba.com/team/1610612751/" rel="noopener noreferrer" target="_blank"><BKN size={50} />Brooklyn Nets</a></li>
                        <li><a href="https://stats.nba.com/team/1610612766/" rel="noopener noreferrer" target="_blank"><CHA size={50} />Charlotte Hornets</a></li>
                        <li><a href="https://stats.nba.com/team/1610612741/" rel="noopener noreferrer" target="_blank"><CHI size={50} />Chicago Bulls</a></li>
                        <li><a href="https://stats.nba.com/team/1610612739/" rel="noopener noreferrer" target="_blank"><CLE size={50} />Cleveland Cavaliers</a></li>
                        <li><a href="https://stats.nba.com/team/1610612765/" rel="noopener noreferrer" target="_blank"><DET size={50} />Detroit Pistons</a></li>
                        <li><a href="https://stats.nba.com/team/1610612754/" rel="noopener noreferrer" target="_blank"><IND size={50} />Indiana Pacers</a></li>
                        <li><a href="https://stats.nba.com/team/1610612748/" rel="noopener noreferrer" target="_blank"><MIA size={50} />Miami Heats</a></li>
                        <li><a href="https://stats.nba.com/team/1610612749/" rel="noopener noreferrer" target="_blank"><MIL size={50} />Milwaukee Bucks</a></li>
                        <li><a href="https://stats.nba.com/team/1610612752/" rel="noopener noreferrer" target="_blank"><NYK size={50} />New York Knicks</a></li>
                        <li><a href="https://stats.nba.com/team/1610612753/" rel="noopener noreferrer" target="_blank"><ORL size={50} />Orlando Magic</a></li>
                        <li><a href="https://stats.nba.com/team/1610612755/" rel="noopener noreferrer" target="_blank"><PHI size={50} />Philidephia 76ers</a></li>
                        <li><a href="https://stats.nba.com/team/1610612761/" rel="noopener noreferrer" target="_blank"><TOR size={50} />Toronto Raptors</a></li>
                        <li><a href="https://stats.nba.com/team/1610612764/" rel="noopener noreferrer" target="_blank"><WAS size={50} />Washington Wizards</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}
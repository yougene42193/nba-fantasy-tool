import React from 'react';
import './Teams.css'

export default class Teams extends React.Component {
    render() {
        return (
            <section className="teams-section">
                <div className="west-teams">
                    <h3>West</h3>
                    <ul class="teams">
                        <li>Dallas Mavericks</li>
                        <li>Denver Nuggets</li>
                        <li>Golden State Warriors</li>
                        <li>Houston Rockets</li>
                        <li>Los Angeles Clippers</li>
                        <li>Los Angeles Lakers</li>
                        <li>Memphis Grizzlies</li>
                        <li>Minnesota Timberwolves</li>
                        <li>New Orleans Pelicans</li>
                        <li>Oklahoma City Thunder</li>
                        <li>Phoenix Suns</li>
                        <li>Portland Trailblazers</li>
                        <li>Sacramento Kings</li>
                        <li>San Antonio Spurs</li>
                        <li>Utah Jazz</li>
                    </ul>
                </div>
                <div className="east-teams">
                    <h3>East</h3>
                    <ul class="teams">
                        <li>Atlanta Hawks</li>
                        <li>Boston Celtics</li>
                        <li>Brooklyn Nets</li>
                        <li>Charlotte Hornets</li>
                        <li>Chicago Bulls</li>
                        <li>Cleveland Cavaliers</li>
                        <li>Detroit Pistons</li>
                        <li>Indiana Pacers</li>
                        <li>Miami Heats</li>
                        <li>Milwaukee Bucks</li>
                        <li>New York Knicks</li>
                        <li>Orlando Magic</li>
                        <li>Philidephia 76ers</li>
                        <li>Toronto Raptors</li>
                        <li>Washington Wizards</li>
                    </ul>
                </div>
            </section>
        )
    }
}
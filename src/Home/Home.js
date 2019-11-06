import React from 'react';
import './Home.css'

export default class Home extends React.Component {
    render() {
        return (
            <section className="home-section">
                <div className="week-schedule">
                    <div className="4-game week">
                        <h3>4 Games</h3>
                        <li>NOP</li>
			            <li>NYK</li>
			            <li>GSW</li>
			            <li>WAS</li>
                    </div>
                    <div class="3-games week">
			            <h3>3 Games</h3>
			            <li>NOP</li>
			            <li>NYK</li>
			            <li>GSW</li>
			            <li>WAS</li>
		            </div>
                    <div class="2-games week">
			            <h3>2 Games</h3>
			            <li>NOP</li>
			            <li>NYK</li>
			            <li>GSW</li>
			            <li>WAS</li>
		            </div>
                    <div class="1-games week">
			            <h3>1 Games</h3>
			            <li>NOP</li>
			            <li>NYK</li>
			            <li>GSW</li>
			            <li>WAS</li>
		            </div>
                </div>
                <div class="top-performers">
		            <h3>Top Performers</h3>
		            <ul>
			            <li>J. Harden - HOU</li>
			            <li>J. Harden - HOU</li>
			            <li>J. Harden - HOU</li>
			            <li>J. Harden - HOU</li>
			            <li>J. Harden - HOU</li>
		            </ul>
	            </div>
                <div class="most-adds">
		            <h3>Most Adds</h3>
		            <ul>
			            <li>J. Hart - NOP</li>
			            <li>J. Hart - NOP</li>
			            <li>J. Hart - NOP</li>
			            <li>J. Hart - NOP</li>
			            <li>J. Hart - NOP</li>
		            </ul>
	            </div>
                <div class="most-drops">
		            <h3>Most Drops</h3>
		            <ul>
			            <li>J. Hart - NOP</li>
			            <li>J. Hart - NOP</li>
			            <li>J. Hart - NOP</li>
			            <li>J. Hart - NOP</li>
			            <li>J. Hart - NOP</li>
		            </ul>
	            </div>
                <div class="trade-targets">
		            <h3>Trade Targets</h3>
		            <ul>
			            <li>J. Hart - NOP</li>
			            <li>J. Hart - NOP</li>
			            <li>J. Hart - NOP</li>
			            <li>J. Hart - NOP</li>
			            <li>J. Hart - NOP</li>
		            </ul>
	            </div>
            </section>
        )
    }
}
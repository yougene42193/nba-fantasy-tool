import React from 'react';
import './Schedule.css'

export default class Schedule extends React.Component {
    render() {
        return (
            <section className='schedule-section'> 
                <select>
                    <option value="wk1">Week 1</option>
                    <option value="wk2">Week 2</option>
                    <option value="wk3">Week 3</option>
                    <option value="wk4">Week 4</option>
                </select>
                <h3>Schedule</h3>
                <table>
                    <tr>
                        <th>Monday (Date)</th>
                        <th>Tuesday (Date)</th>
                        <th>Wednesday (Date)</th>
                        <th>Thurday (Date)</th>
                        <th>Friday (Date)</th>
                        <th>Saturday (Date)</th>
                        <th>Sunday (Date)</th>
                    </tr>
                    <tr>
                        <th id="monday">
                            <li>NOP</li>
                            <li>NYK</li>
                            <li>BKN</li>
                            <li>LAL</li>
                        </th>
                        <th id="tuesday">
                            <li>LAC</li>
                            <li>BOS</li>
                            <li>CHI</li>
                            <li>WAS</li>
                        </th>
                        <th id="wednesday">
                            <li>POR</li>
                            <li>UTA</li>
                            <li>MIN</li>
                            <li>ORL</li>
                            <li>MIA</li>
                            <li>SAC</li>
                            <li>TOR</li>
                            <li>MIL</li>
                        </th>
                        <th id="thursday">
                            <li>NOP</li>
                            <li>MEM</li>
                        </th>
                        <th id="friday">
                            <li>ORL</li>
                            <li>MIA</li>
                            <li>NYK</li>
                            <li>BKN</li>
                            <li>WAS</li>
                            <li>ATL</li>
                        </th>
                        <th id="saturday">
                            <li>NOP</li>
                            <li>NYK</li>
                            <li>UTA</li>
                            <li>LAL</li>
                            <li>LAC</li>
                        </th>
                        <th id="sunday">
                            <li>BKN</li>
                            <li>ATL</li>
                            <li>BOS</li>
                        </th>
                    </tr>
                </table>
            </section>
        )
    }
}
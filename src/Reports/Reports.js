import React from 'react';
import './Reports.css'

export default class Reports extends React.Component {
    render() {
        return (
            <section className='reports-section'>
                <div class="search">
                    <form>
                        <input type="text" placeholder="Enter player name"></input>
                        <input type="button" value="Search"></input>
                    </form>
                </div>
                <h3>Reports</h3>
                <div class="report">
                    <img></img>
                    <p>Lorem Ipsum</p>
                </div>
                <div class="report">
                    <img></img>
                    <p>Lorem Ipsum</p>
                </div>
                <div class="report">
                    <img></img>
                    <p>Lorem Ipsum</p>
                </div>
                <div class="report">
                    <img></img>
                    <p>Lorem Ipsum</p>
                </div>
                <div class="report">
                    <img></img>
                    <p>Lorem Ipsum</p>
                </div>
            </section>
        )
    }
}
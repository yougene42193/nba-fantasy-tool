import React from 'react';
import './Header.css'

export default class Header extends React.Component {
    render() {
        return(
            <section className="top-header">
                <nav role='navigation'>
                    <h1>NBA Fantasy Tool</h1>
                    <ul className="menu-nav">
                        <li>Home</li>
                        <li>Schedule</li>
                        <li>Teams</li>
                        <li>Standing</li>
                        <li>Reports</li>
                    </ul>
                </nav>
            </section>
        )
    }
}
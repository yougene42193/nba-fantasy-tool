import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return(
            <section className="top-header">
                <nav role='navigation'>
                    <h1>NBA Fantasy Tool</h1>
                    <ul className="menu-nav">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/schedule'>Schedule</Link></li>
                        <li><Link to='/teams'>Teams</Link></li>
                        <li><Link to='/standings'>Standing</Link></li>
                        <li><Link to='/reports'>Reports</Link></li>
                    </ul>
                </nav>
            </section>
        )
    }
}
import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return(
            <section className="top-header">
                <nav role='navigation'>
                    <h1>NBA Fantasy Tool</h1>
                    <div className="menu-nav">
                        <a href="home"><Link to='/'>Home </Link></a>
                        <a href="schedule"><Link to='/schedule'>Schedule </Link></a>
                        <a href="teams"><Link to='/teams'>Teams </Link></a>
                        <a href="standings"><Link to='/standings'>Standing </Link></a>
                        <a href="reports"><Link to='/reports'>Reports </Link></a>
                    </div>
                </nav>
            </section>
        )
    }
}
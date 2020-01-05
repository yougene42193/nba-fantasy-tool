import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { IoIosArrowDropdownCircle } from "react-icons/io";

export default class Header extends React.Component {
    render() {
        return(
            <section className="top-header">
                <nav role='navigation'>
                    <h1>NBA Fantasy Tool</h1>
                    <div className="menu-nav">
                        <ul>
                            <li className="nav-li"><a href="home"><Link to='/'>Home </Link></a></li>
                            <li className="nav-li"><a href="schedule"><Link to='/schedule'>Schedule </Link></a></li>
                            <li className="nav-li"><a href="teams"><Link to='/teams'>Teams </Link></a></li>
                            <li className="nav-li"><a href="standings"><Link to='/standings'>Standing </Link></a></li>
                            <li className="nav-li"><a href="reports"><Link to='/reports'>Reports </Link></a></li>
                        </ul>  
                    </div>
                    <div className="arrow-down-icon"><IoIosArrowDropdownCircle size="24" /></div>
                </nav>
            </section>
        )
    }
}
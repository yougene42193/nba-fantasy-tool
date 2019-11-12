import React from 'react';
import './Footer.css'

export default class Footer extends React.Component {
    render() {
        return(
            <section className="footer">
                <footer className="github-footer">Created by: <a href="https://github.com/nd-jeong" rel="noopener noreferrer" target="_blank">Andy Jeong</a> & <a href="https://github.com/yougene42193" rel="noopener noreferrer" target="_blank">Eugene Song</a></footer>
            </section>
        )
    }
}
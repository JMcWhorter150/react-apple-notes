import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <Link to="/">Home</Link>
            <br />
            <Link to="/search">Search</Link>
            <br />
            <Link to="/create">New Note</Link>
        </div>
    );
}
import React from 'react';
import { NavLink } from "react-router-dom";
import { navData } from "../../data/navData";

export default function Navbar() {
    return (
        <>
            <nav className="Navbar">
                <ul>
                    {navData.map((data, key) => {
                        return (
                            <li key={key}><NavLink to={data.path}><i className={data.icon} /> {data.name}</NavLink></li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

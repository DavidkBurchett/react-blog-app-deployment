import React from "react";
import './Header.css'
import { Link } from 'react-router'

export function Header () {
    return (
        <div class = "header">
            <h1> My Blog </h1>
            <nav>
                <h2> <Link to="/">Home</Link> </h2>
                <h2> <Link to="/contact">Contact</Link> </h2>
                <h2> <Link to="/posts">Blog Posts</Link> </h2>
                {/* <h2> <a href = "#content" > Content </a> </h2> */}
            </nav>
        </div>

    )
}
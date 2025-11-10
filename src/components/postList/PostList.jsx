import React from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/footer";
import { Link } from "react-router";
import "./postList.css"

export function PostList() {
    return (
        <>
            <Header />
            <div class="postlist">
                <Link to="/posts/1">Post 1</Link>
                <Link to="/posts/2">Post 2</Link>
                <Link to="/posts/3">Post 3</Link>
            </div>
            <Footer />
        </>
    )
}
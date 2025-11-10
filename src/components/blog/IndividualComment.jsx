import React from "react";
import "./comments.css"

export function IndividualComment({value}) {
    return (
    <div class="indcomment">
        <p>Name: {value.name}</p>
        <p>{value.content}</p>
    </div>
    )
}
import { useState } from 'react'
import React from "react";
import './Like.css'
import { SlLike } from "react-icons/sl";

export function Like() {
const [count, setCount] = useState(0)

return (
<>
<div className="card">
<button className = "like" onClick={() => setCount((count) => count + 1)}>
<SlLike/> {count}
</button>
</div>

</>
)
}

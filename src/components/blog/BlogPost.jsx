import React, { useEffect, useState } from "react"
import { CommentForm } from "./CommentForm"
import './BlogPost.css'
import { Like } from "./Like"
import { useParams } from "react-router"
import axios from 'axios'

export function BlogPost () {
  const params = useParams();

  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState();
  const [authorData, setAuthorData] = useState();

  useEffect(() => {
    const fetchData = async() => {
      try{
        const postRes = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${params.post_id}`
        );
        setPostData(postRes.data)

        const authorRes = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`
        );
        setAuthorData(authorRes.data)
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    };
    fetchData();
  }, []);

  

    // const blogData = {title: "Post " + params.post_id, 
    //   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula eleifend libero sit amet sodales. Nunc efficitur enim a sapien dignissim, et vehicula magna bibendum. Ut eget turpis quis odio cursus tincidunt sit amet vel nulla. Maecenas a tellus non velit pulvinar efficitur. Sed sit amet suscipit mi, quis condimentum mi. Nullam consectetur ac felis id mattis. Cras blandit, dolor et laoreet ornare, mi nisl iaculis velit, id tempor dui metus in enim. Vestibulum in nisl sed urna ultricies pretium ac a mi. Duis nec metus nibh. Curabitur rutrum dictum iaculis. In hac habitasse platea dictumst. ", 
    //   author: "Author: Kyle Burchett", 
    //   Date: "Date: Oct 23, 2025"
    // }

    return (
      <div> 
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
        <h1> {postData.title} </h1>
        <p> {postData.body} </p>
        <div class="info">
          <p> {authorData.name} </p>
        </div>

        <CommentForm />
        <Like />
        </div>
      )}
      </div>
    )

  }  
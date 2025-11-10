import {React , useState, useRef, useEffect} from "react";
import './Comments.css'
import { useToggle } from "../../hooks/useToggles";
import { IndividualComment } from "./IndividualComment";
import axios from "axios";
import { useParams } from "react-router";


export function CommentForm () {
    const params = useParams();

    const [comment, setComment] = useState({
    name: '',
    content: ''
    });

    const [commentList, setCommentList] = useState([]);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(true);
    const [commentData, setCommentData] = useState();

    useEffect(() => {
    const fetchData = async() => {
      try{
        const postRes = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`
        );
        setCommentData(postRes.data)
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    };
    fetchData();
  }, []);


    /*
    const addComment = (comment) => {
    setCommentList([...commentList, comment]);
    }
    */

    const [show, toggleShow] = useToggle()
    const textboxref = useRef();


    const postComment = () => {
            axios.post(`https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`, {
            name: comment.name,
            body: comment.content 
        })
        .then((response) => {
            setCommentList([...commentList, comment]);
            setComment({ name: '', content: '' });
        })
        .catch((error) => {
            console.error("Error posting comment:", error);
        });
    };

    return (
        <div id="comment_class">
            <h2> Comments </h2>
            <input
                value={comment.name}
                onChange={(e) => setComment({...comment, name: e.target.value})}
                placeholder="Name"
            />
            <textarea
                ref={textboxref}
                value={comment.content}
                onChange={(e) => setComment({...comment, content: e.target.value})}
                placeholder="Add a comment"
            />
            <button class ="commentbtn"
                onClick= {postComment}
                type="submit"
            > 
            Submit 
            </button>
            <button className="commentbtn" onClick={toggleShow}>Show Comments</button>
                {show && (
                    loading ? (
                        <p>Loading…</p>
                    ) : !commentData || commentData.length === 0 ? (

                    <p>There are no comments to display!</p>

                    ) : (

                    <div>
                    {commentData.map((c) => (
                    <IndividualComment
                    key={c.id}
                    value={{ name: c.name, content: c.body }}
                    />

                    ))}
                    {commentList.map((value, idx) => (
                    <IndividualComment key={`local-${idx}`} value={value} />
                    ))}

                </div>
            ))}
        </div>
        )
}
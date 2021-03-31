import React from 'react';
import TopMenu from "./TopMenu";
import {useParams} from "react-router-dom";
import Posts from '../data/posts.json';

function Blogpost () {
    <TopMenu/>
    const { id } = useParams();
    const singlePost = Posts[`${id}`]

    return(
        <div>Blog { id }: {singlePost.title}
            {singlePost.data}
            {singlePost.content}
        </div>
)

}
export default Blogpost;
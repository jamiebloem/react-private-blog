import React from 'react';
import TopMenu from "./TopMenu";
import Posts from '../data/posts.json';
import {NavLink} from "react-router-dom";

function Blog() {
    <TopMenu/>

    return (
        <>
            <h2>Blogposts</h2>
            <ol>
                    {Posts.map((blogDetails, index) => {
                        return <ul>
                            <li>
                                Date: {blogDetails.date}<br/>
                                Title: <NavLink to={`/blogpost/${blogDetails.id}`}> {blogDetails.title}
                            </NavLink>
                            </li>
                        </ul>
                    })}

                    );
                })}
            </ol>
        </>

            )
            }


                export default Blog;
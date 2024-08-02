import React from "react";
import Article from "./Article"; 
function ArticleList(){
const blogData = {
  
    posts: [
        {id: 1, title: "Components 101",  date: "December 15, 2020", preview: "Setting up the building blocks of your site",},
        {id: 2, title: "React Data Flow", date: "December 11, 2020", preview: "Passing props is never …" },
        {id: 3, title: "Function vs Class Components", date:"January 1, 1970",preview: "React, meet OOJS.",}
        ]
}
    return (
    <>
        <main>
            {blogData.posts.map((post, id) => (
                <Article key={id} 
                title={post.title} 
                date={post.date} 
                content={post.preview}
                readingTime={post.readingTime}
                />
            ))}
        </main>
    </>  

   );
}
export default ArticleList;


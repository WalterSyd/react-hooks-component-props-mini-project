import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList"
import Article from "./Article"



function App() {
  console.log(blogData);
  return (
  <div className="App">
    <Header name={blogData.name} /> 
    <About about={blogData.about} />
    <ArticleList posts={blogData.posts} />
    <Article title={blogData.posts[0].title} date={blogData.posts[0].date} preview={blogData.posts[0].preview} />
  </div>
  
  );
}

export default App;



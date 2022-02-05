import React from "react";
// function NumberList(){
//     const numbers = [1,2,3,4,5];
//     const listItems = numbers.map((number,key) =>(
//         <li key={key}>{number}</li>
//     ));
//     return (<ul>{listItems}</ul>)
// }
const posts = [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ]
function Blog() {
    const sidebar = (
      <ul>
        {posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }
  
  
export default Blog();
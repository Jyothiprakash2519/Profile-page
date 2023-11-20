import React from "react";

const BlogPostsList = () => {
  const posts = [
    {
      title: "A Changing World Order",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      author: "Anuj Gosalia",
      date: "August 2, 2023",
      views: 102
    },
    {
      title: "Indian v/s Australia",
      content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word",
      author: "Anuj Gosalia",
      date: "January 21, 2023",
      views: 156
    },
    {
      title: "Write To Build",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
      author: "Anuj Gosalia",
      date: "November 15, 2022",
      views: 228
    }
  ];

  return (
    <ul className="blog-posts-list">
      {posts.map((post) => (
        <li key={post.title}>
          <h3>{post.title}</h3>
          <p>
            <span className="author">{post.author}</span>
            <br></br>
            <span className="content">{post.content}</span>
            <br></br>
            <span className="date">{post.date}</span>
            <br></br>
            <span className="views">{post.views} views</span>
            <hr></hr>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default BlogPostsList;

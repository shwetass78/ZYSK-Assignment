import React from "react";
import "./blogPosts.css";

const BlogPosts = () => {
  const posts = [
    {
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      image: "image/Image.png", // Replace with actual image URL
    },
    {
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      image: "image/Image1.png", // Replace with actual image URL
    },
    {
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      image: "image/Image2.png", // Replace with actual image URL
    },
  ];

  return (
    <section className="blog-section">
      <header className="blog-header">
        <h2>Lastest blog posts</h2>
        <p>
          Tools and strategies modern teams need to help their companies grow.
        </p>
        <button className="view-posts-button">View all posts</button>
      </header>
      <div className="blog-posts">
        {posts.map((post, index) => (
          <div key={index} className="blog-card">
            <div
              className="blog-image"
              style={{ backgroundImage: `url(${post.image})` }}
            ></div>
            <div className="blog-content">
              <span className="blog-category">{post.category}</span>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
              <div className="blog-author">
                <img src="image/profile.png" alt="" />
                <div>
                  <span>{post.author}</span> • <span>{post.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;

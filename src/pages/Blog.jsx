import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './BlogPage.css'; 


export default function BlogPage() {
  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "Exploring the Future of AI",
      description: "Dive into the latest trends and predictions for artificial intelligence.",
      imgSrc: "https://www.shutterstock.com/shutterstock/photos/1608340216/display_1500/stock-vector-beauty-blog-hand-written-logo-for-overlay-print-social-media-logo-for-beauty-blogger-1608340216.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Understanding Blockchain Technology",
      description: "A comprehensive guide to blockchain and its applications.",
      imgSrc: "https://www.shutterstock.com/shutterstock/photos/1608340216/display_1500/stock-vector-beauty-blog-hand-written-logo-for-overlay-print-social-media-logo-for-beauty-blogger-1608340216.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "The Rise of Quantum Computing",
      description: "How quantum computers are changing the landscape of technology.",
      imgSrc: "https://www.shutterstock.com/shutterstock/photos/1608340216/display_1500/stock-vector-beauty-blog-hand-written-logo-for-overlay-print-social-media-logo-for-beauty-blogger-1608340216.jpg",
      link: "#"
    },
    {
        id: 4,
        title: "The Rise of Quantum Computing",
        description: "How quantum computers are changing the landscape of technology.",
        imgSrc: "https://www.shutterstock.com/shutterstock/photos/1608340216/display_1500/stock-vector-beauty-blog-hand-written-logo-for-overlay-print-social-media-logo-for-beauty-blogger-1608340216.jpg",
        link: "#"
      },
      {
        id: 5,
        title: "The Rise of Quantum Computing",
        description: "How quantum computers are changing the landscape of technology.",
        imgSrc: "https://www.shutterstock.com/shutterstock/photos/1608340216/display_1500/stock-vector-beauty-blog-hand-written-logo-for-overlay-print-social-media-logo-for-beauty-blogger-1608340216.jpg",
        link: "#"
      },
      {
        id: 6,
        title: "The Rise of Quantum Computing",
        description: "How quantum computers are changing the landscape of technology.",
        imgSrc: "https://www.shutterstock.com/shutterstock/photos/1608340216/display_1500/stock-vector-beauty-blog-hand-written-logo-for-overlay-print-social-media-logo-for-beauty-blogger-1608340216.jpg",
        link: "#"
      },
      {
        id: 7,
        title: "The Rise of Quantum Computing",
        description: "How quantum computers are changing the landscape of technology.",
        imgSrc: "https://www.shutterstock.com/shutterstock/photos/1608340216/display_1500/stock-vector-beauty-blog-hand-written-logo-for-overlay-print-social-media-logo-for-beauty-blogger-1608340216.jpg",
        link: "#"
      },
      {
        id: 8,
        title: "The Rise of Quantum Computing",
        description: "How quantum computers are changing the landscape of technology.",
        imgSrc: "https://www.shutterstock.com/shutterstock/photos/1608340216/display_1500/stock-vector-beauty-blog-hand-written-logo-for-overlay-print-social-media-logo-for-beauty-blogger-1608340216.jpg",
        link: "#"
      },
      {
        id: 9,
        title: "The Rise of Quantum Computing",
        description: "How quantum computers are changing the landscape of technology.",
        imgSrc: "https://www.shutterstock.com/shutterstock/photos/1608340216/display_1500/stock-vector-beauty-blog-hand-written-logo-for-overlay-print-social-media-logo-for-beauty-blogger-1608340216.jpg",
        link: "#"
      },
  ];

  return (
    <>
    <Header/>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Welcome to FTV Blog</h1>
          <p className="hero-subtitle">Stay updated with the latest trends in Fashion </p>
        </div>
      </section>

      {/* Blog Cards Section */}
      <div className="container mt-5">
        <div className="row">
          {blogPosts.map(post => (
            <div className="col-md-4 mb-4" key={post.id}>
              <div className="card blog-card">
                <img src={post.imgSrc} className="card-img-top" alt={post.title} />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.description}</p>
                  <a href={post.link} className="btn btn-outline-primary">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

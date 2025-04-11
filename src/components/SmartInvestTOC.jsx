import React from 'react';
import './SmartInvestTOC.css'; // We'll create this next

export default function SmartInvestTOC() {
  return (
    <div className="container">
      <h1 className="title">Smart Invest</h1>

      <div className="toc-card">
        <h2>Table of Contents</h2>
        <ul className="toc-list">
          <li><a href="https://faq-git-main-pavansharan007s-projects.vercel.app">📘 Guide for Stock Market</a></li>
          <li><a href="https://fronted-bh2g-git-main-pavansharan007s-projects.vercel.app/">📊 Best Stock Rankings</a></li>
          <li><a href="https://demotrade-git-main-pavansharan007s-projects.vercel.app">🧪 Demo Trade</a></li>
        </ul>
      </div>

      <section id="guide" className="section">
        <h3>📘 Guide for Stock Market</h3>
        <p>Learn the basics of stock market investing, how to open a demat account, understand risk vs reward, and begin your financial journey with confidence.</p>
      </section>

      <section id="rankings" className="section">
        <h3>📊 Best Stock Rankings</h3>
        <p>Explore top-ranked stocks based on fundamentals and technicals. Stay informed and make data-driven investment decisions.</p>
      </section>

      <section id="demo" className="section">
        <h3>🧪 Demo Trade</h3>
        <p>Try simulated trading with virtual money. Practice without the risk and build your confidence before you go live.</p>
      </section>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./Resources.css";

const Resources = () => {
  const [search, setSearch] = useState("");
  const [filteredResources, setFilteredResources] = useState([]);
  const [randomTip, setRandomTip] = useState("");
  const [resourceOfTheDay, setResourceOfTheDay] = useState({});

  const resources = [
    {
      category: "Tutorials",
      items: [
        {
          title: "HTML and CSS in Depth (Meta)",
          link: "https://www.coursera.org/learn/html-and-css-in-depth?specialization=meta-front-end-developer",
          rating: 5,
        },
        {
          title: "JavaScript Programming (Meta)",
          link: "https://www.coursera.org/learn/programming-with-javascript?specialization=meta-front-end-developer",
          rating: 4.8,
        },
      ],
    },
    {
      category: "Handwritten Notes",
      items: [
        {
          title: "HTML Notes",
          link: "https://drive.google.com/file/d/1BpV99BPGRtjEPFe2AH8Wh7gCum1kpA8J/view",
          rating: 5,
        },
        {
          title: "JavaScript Notes",
          link: "https://drive.google.com/file/d/1Ty8PrMnXzo61-QRXtWdMW3FH4guRo6Gv/view",
          rating: 4.9,
        },
        {
          title: "CSS Notes",
          link: "https://drive.google.com/file/d/19t4lraBrBz685AD-cEiPMrbyiDffQqdE/view",
          rating: 4.8,
        },
      ],
    },
    {
      category: "Tools",
      items: [
        { title: "VS Code", link: "https://code.visualstudio.com/", rating: 5 },
        { title: "GitHub", link: "https://github.com/", rating: 5 },
        { title: "Netlify", link: "https://www.netlify.com/", rating: 4.8 },
        { title: "Vercel", link: "https://vercel.com/", rating: 4.9 },
        { title: "Postman", link: "https://www.postman.com/", rating: 4.7 },
        { title: "Figma", link: "https://www.figma.com/", rating: 4.9 },
      ],
    },
  ];

  const tips = [
    "🚀 Consistency beats perfection in web development.",
    "💡 Learn Git and GitHub — it’s essential for collaboration.",
    "🎨 Mastering CSS Grid and Flexbox makes layout a breeze.",
    "⚡ Use browser DevTools to debug like a pro.",
    "💻 VS Code extensions like Prettier and Live Server save time.",
  ];

  useEffect(() => {
    setFilteredResources(resources);
    setRandomTip(tips[Math.floor(Math.random() * tips.length)]);
    const allItems = resources.flatMap((section) => section.items);
    setResourceOfTheDay(allItems[Math.floor(Math.random() * allItems.length)]);
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);

    const filtered = resources.map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        item.title.toLowerCase().includes(searchTerm)
      ),
    }));
    setFilteredResources(filtered);
  };

  return (
    <div className="resources-container">
      <nav className="navbar">
        <div className="logo">WebDevHub</div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/learn">Learn</a></li>
          <li><a href="/codepad">CodePad</a></li>
          <li><a href="/resources">Resources</a></li>
        </ul>
      </nav>

      <header className="resources-hero">
        <h1>📚 WebDevHub Resources</h1>
        <p>Your ultimate toolbox for web development success!</p>
      </header>

      <input
        type="text"
        placeholder="🔍 Search resources..."
        value={search}
        onChange={handleSearch}
        className="search-bar"
      />

      <div className="tip-box">💡 Dev Tip: {randomTip}</div>

      <div className="resource-of-the-day">
        🌟 Resource of the Day:{" "}
        <a href={resourceOfTheDay.link} target="_blank" rel="noopener noreferrer">
          {resourceOfTheDay.title}
        </a>
      </div>

      {filteredResources.map((section, index) => (
        <section key={index} className="resources-section">
          <h2>{section.category}</h2>
          <div className="resource-cards">
            {section.items.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
              >
                <span>{item.title}</span>
                <span>⭐ {item.rating}</span>
              </a>
            ))}
          </div>
        </section>
      ))}

      <footer>
        <p>© 2025 WebDevHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Resources;

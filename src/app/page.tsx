"use client"
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import FeaturedProjects from '@/components/FeaturedProjects';
import AgeDisplay from '../components/AgeDisplay';

export default function Home() {
  const [repos, setRepos] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/users/that-jamal/repos')
      .then(res => res.json())
      .then(data => {
        const sorted = data.sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(sorted);
      });

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className=" min-h-screen bg-gray-100 bg-gradient-to-r from-[rgb(114,30,56)] via-[rgb(0,0,0)] to-[rgb(15,55,63)] h-full">

      <div className={scrolled ? "  transition-all duration-500  h-80" : " transition-all duration-500 left-0 top-0 w-full h-screen"}></div>
      <div style={{ fontFamily: '"Courier New", monospace' }} className="bg-gray-100 p-8 bg-gradient-to-r from-[rgb(250,250,250)]  to-[rgb(114,30,56)] shadow-lg p-5 rounded-xl w-full">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-xl mb-2">
          Hi, I'm jamil varg a fin/swe <AgeDisplay /> yr old programmer.
        </p>
        <p className="mb-4">
          I have studied at <strong>Optima Program Utvekling</strong> for 3 years where I deepened my knowledge in programming fundamentals, software development, and modern web technologies.
        </p>

        {/* Background and Interests */}
        <p className="mb-4">
          Ever since I was young, I have shared a deep interest in computers and programming. I started tinkering with code at an early age, and that curiosity grew into a full-blown passion. I enjoy exploring new technologies, building fun projects, and learning about the latest advancements in software and artificial intelligence.
        </p>

        with machine learning algorithms or diving into deep learning frameworks, I love applying creative solutions to real-world problems.        {/* Passion for AI and Technology */}
        <p className="mb-4">
          My fascination with artificial intelligence stems from its limitless potential to shape the future. Whether it’s experimenting
        </p>

        {/* Additional Details */}
        <p className="mb-4">
          Beyond coding, I am always seeking ways to expand my skill set and collaborate on interesting projects that push the boundaries of technology. I believe in the power of continuous learning and am constantly exploring new libraries, frameworks, and methodologies to improve my work.
        </p>

        {/* Future Goals */}
        <p className="mb-4">
          Looking ahead, I aim to contribute to innovative projects, work with like-minded developers, and further enhance my expertise in both traditional software development and emerging technologies like AI. I am always excited about challenges that help me grow and refine my craft.
        </p>

        {/* Call-to-Action */}
        <p className="text-lg">
          Feel free to explore my projects , Thank you for visiting my Porfolio.
        </p>

      </div>
      <Navbar scrolled={scrolled} />
      <section id="featured-projects" className="mt-8">
        <h2 className="text-white text-2xl font-bold text-center mb-10">Featured Projects</h2>
        <FeaturedProjects />
      </section>
      <section id="github-repos" className="mt-10">
        <h1 className="text-white text-4xl font-bold text-center mb-10">that-jamal's GitHub Repositories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map(repo => (
            <div key={repo.id} className="bg-gray-100 p-8 bg-gradient-to-r from-[rgb(250,250,250)]  to-[rgb(15,55,63)] shadow-lg p-5 rounded-xl">
              <h2 className="text-xl font-semibold">{repo.name}</h2>
              <p className="text-gray-600 mb-2">{repo.description || "No description"}</p>
              <div className=" text-sm text-gray-500 mb-2">
                ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
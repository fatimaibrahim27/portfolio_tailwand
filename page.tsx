// pages/index.tsx
import React from 'react';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className="bg-[#020710] text-white font-sans">
      <header>
        <nav className="flex justify-around items-center h-20 bg-[#6A699E]">
          <div className="text-2xl">Fatima's Portfolio</div>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-pink-400 hover:text-lg transition-all">Home</a></li>
            <li><a href="/" className="hover:text-pink-400 hover:text-lg transition-all">About</a></li>
            <li><a href="/" className="hover:text-pink-400 hover:text-lg transition-all">Services</a></li>
            <li><a href="/" className="hover:text-pink-400 hover:text-lg transition-all">Projects</a></li>
            <li><a href="/" className="hover:text-pink-400 hover:text-lg transition-all">Contact Me</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="firstsection flex flex-wrap justify-around items-center my-32 space-y-6 lg:space-y-0">
          <div className="leftsection text-4xl lg:text-5xl">
            Hi, My name is <span className="text-[#733FA2]">Fatima Ibrahim</span>
            <br /> and I’m a web developer
            <span id="element" className="block mt-4"></span>
          </div>
          <div className="rightsection">
            <img src="https://static.vecteezy.com/system/resources/previews/011/153/360/original/3d-web-developer-working-on-project-illustration-png.png" width={400} height={300} alt="Profile Image" className="w-4/5 mx-auto" />
          </div>
        </section>

        <hr className="border-0 bg-[#9c97f1] h-[1.2px] mx-20 my-10" />

        <section className="secondSection max-w-[80vw] mx-auto h-[80vh]">
          <ul className="italic text-gray-200 text-center mb-6">
            <h2 className="text-2xl">"What I have done so far"</h2>
          </ul>
          <div className="box flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
            <div className="vertical flex flex-col items-center">
              <img className="w-40 mb-4" src="./pngs2.webp" alt="Work Experience" />
              <h1 className="text-xl mb-4">Work Experience</h1>
              <ul className="space-y-2 text-center">
                <li>Social Media Manager</li>
                <li>Digital Creator</li>
                <li>Freelancer</li>
                <li>Canva Expert</li>
                <li>Ads Posting</li>
              </ul>
            </div>
            <div className="vertical-title mt-8">
              <h1 className="text-xl mb-4">Education</h1>
              <div className="vertical-desc text-white">
                <ul className="space-y-2">
                  <li>Matric: Sahar Schooling System</li>
                  <li>Intermediate: Sir Syed College</li>
                  <li>University: Hamdard Uni (BS in DSWT)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-0 bg-[#9c97f1] h-[1.2px] mx-20 my-10" />

        <section className="text-center mt-10">
          <h2 className="text-xl mb-6">Follow us on:</h2>
          <div className="flex justify-center items-center space-x-4">
            <img src="https://th.bing.com/th/id/R.e790c25db5e52838040686612b1a732c?rik=J1j%2bTWManwzbIg&pid=ImgRaw&r=0" alt="Social Icon" className="w-6 h-6" />
            <span>|</span>
            <img src="https://pngimg.com/uploads/github/github_PNG28.png" alt="Social Icon" className="w-8 h-8" />
            <span>|</span>
            <img src="https://th.bing.com/th/id/OIP.LJToC8Q5-Kwm7tMwY5GAgwHaHa?rs=1&pid=ImgDetMain" alt="Social Icon" className="w-6 h-6" />
          </div>
          <div className="mt-4 text-gray-400">
            <img src="https://th.bing.com/th/id/R.03f40b67b63d9c1c1a5a792109bbc699?rik=8HhXk%2b5PP7XurQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2finstagram%2finstagram_PNG10.png&ehk=%2f7%2ftghrL31GFpelB7DZvprao8IZHRvmhi0BpDsEAZgI%3d&risl=&pid=ImgRaw&r=0" alt="Email Icon" className="inline-block w-6 h-6" />
            <span className="ml-2">optimumonline06@gmail.com</span>
          </div>
        </section>
      </main>

      <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
      <script>
      
      {/* var typed = new Typed('#element', {
         String : ['<i>Web Developer</i>', 'Social Media Manager', 'Content Writer', 'Video Editor'],
          typeSpeed: 40,
          backSpeed: 30,
          loop: true,
        }); */}




      </script>
    </div>
  );
};

export default Home;

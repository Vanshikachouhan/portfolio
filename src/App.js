//import Rit from "./Rit";
//import You from "./You";
//import { useState } from "react";
//function App(){
  //const [count,setcount]=useState(0);
  //return(
   // <div>
   //   <p>{count}</p>
    //  <button onClick={()=>setcount(count+1)}>+1j</button>
    //</div>
//);}
// import MyForm from "./MyForm";
// function App(){
//   return(
//   <MyForm/>
//   );
// }
// export default App; 
//key with unique id
// import { useState } from "react";
// function App(){



//   const [item, setitems]=useState([
//     {id:1, name:"orange"},{id:2, name: "grapes"}, {id:3, name:"papaya"} ]);

//   const add=()=>{
//     const news={id:Date.now(), name:"banana"};
//     setitems([news,...item]);
//   }

//   return(
//     <div>
//       <ul>
//         <button onClick={add}>add item</button>
        
//           {item.map(items=>(
//             <li key={items.id}>{items.name}</li>
//           ))}
        
//       </ul>
//     </div>
//   );
// }
// export default App;
//lifting state up

// import { useState } from "react";
// import MyForm from "./MyForm";
// function App(){
//   const [text, settext]=useState("");
//   return(
//     <div>
//       <MyForm text={text} settext={settext} label="unput A"/>
//       <MyForm text={text} settext={settext} label="unput B"/>
    
//     </div>
//   );
// }9
// export default App;
// import React, { createContext, useContext} from "react";
// const Usercontext= createContext();
// function App(){
//   const user="chouhan";
//   return(
//     <Usercontext.Provider value={user}>
//       <Child />
//     </Usercontext.Provider>
//   );
// }
// function Child(){
//   const user =useContext(Usercontext);
//   return(
//     <p>
//       hello,{user}
//     </p>
//   );
// }

// export default App;
// src/App.js
import React, { useState } from "react";

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // keep header/footer dark by default

  // theme colors (we use Tailwind arbitrary colors where needed)
  const headerBg = "bg-[#0F172A]"; // dark navy
  const contentBg = "bg-[#E2E8F0]"; // light slate-blue

  const toggleDrawer = () => setDrawerOpen((s) => !s);
  const closeDrawer = () => setDrawerOpen(false);
  const toggleTheme = () => setDarkMode((d) => !d);

  // menu items
  const menu = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className={`${darkMode ? "" : ""} min-h-screen`}>
      {/* smooth scroll + header offset */}
      <style>{`html { scroll-behavior: smooth; scroll-padding-top: 96px; }`}</style>

      {/* Header bar (full width), content boxed */}
      <header className={`w-full ${headerBg} text-white fixed top-0 left-0 z-50`}>
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            {/* LEFT: Brand */}
            <div className="font-bold text-lg select-none">Vanshika Chouhan</div>

            {/* CENTER: desktop links */}
            <div className="hidden md:flex gap-6 items-center text-sm">
              {menu.map((m) => (
                <a
                  key={m.id}
                  href={`#${m.id}`}
                  className="hover:underline"
                >
                  {m.label}
                </a>
              ))}
            </div>

            {/* RIGHT: actions */}
            <div className="flex items-center gap-4">
              {/* Resume button (desktop) */}
              <a
                href="/vanshika chouhan_124554.pdf"
                download
                className="hidden sm:inline-block px-3 py-1 rounded-md border border-white/30 text-sm"
              >
                Resume
              </a>

            

              {/* Hamburger for mobile */}
              <button
                onClick={toggleDrawer}
                aria-label="Open menu"
                className="md:hidden p-2 rounded-md focus:outline-none"
              >
                {/* three line icon */}
                <div className="space-y-1">
                  <span className="block w-6 h-0.5 bg-white"></span>
                  <span className="block w-6 h-0.5 bg-white"></span>
                  <span className="block w-6 h-0.5 bg-white"></span>
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile drawer (floating, ~50% width) */}
      <div
        aria-hidden={!drawerOpen}
        className={`fixed left-6 top-20 z-40 transform transition-all duration-300 ease-out ${
          drawerOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        } md:hidden`}
        style={{ width: drawerOpen ? "50vw" : "0" }}
      >
        {/* Panel */}
        <div
          className={`rounded-xl overflow-hidden shadow-lg ${headerBg} text-white p-4`}
          style={{ width: "min(50vw, 320px)" }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="font-semibold">Menu</div>
            <button
              onClick={closeDrawer}
              aria-label="Close menu"
              className="text-white text-xl"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {menu.map((m) => (
              <a
                key={m.id}
                href={`#${m.id}`}
                onClick={() => {
                  // close drawer automatically when a link is clicked
                  closeDrawer();
                }}
                className="block text-left px-3 py-2 rounded-md border border-white/40 hover:bg-white/5 transition"
              >
                {m.label}
              </a>
            ))}

            {/* also show resume link inside drawer */}
            <a
              href="/resume.pdf"
              download
              onClick={closeDrawer}
              className="mt-3 inline-block px-3 py-2 rounded-md border border-white/40 text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Page content area (boxed, light background) */}
      <main className={`${contentBg} pt-28 pb-16 min-h-screen`}>
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          {/* About */}
          <section id="about" className="rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-3 text-[#0F172A]">About Me</h2>
            <p className="text-[#0F172A]/90">
              I am currently pursuing my MCA (Master of Computer Applications) and looking for an internship to gain practical experience in front-end development. I have knowledge of React and JavaScript and am learning Tailwind CSS to build responsive and modern web interfaces. I am eager to enhance my skills and contribute to exciting web projects.
            </p>
          </section>

          {/* Skills */}
          <section id="skills" className="rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#0F172A]">Skills</h2>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 text-center">
              <div className="p-3 bg-white rounded-md shadow"><div className="text-xl">🧱</div><div className="text-sm mt-1">HTML</div></div>
              <div className="p-3 bg-white rounded-md shadow"><div className="text-xl">🎨</div><div className="text-sm mt-1">CSS</div></div>
              <div className="p-3 bg-white rounded-md shadow"><div className="text-xl">🧠</div><div className="text-sm mt-1">JavaScript</div></div>
              <div className="p-3 bg-white rounded-md shadow"><div className="text-xl">⚛️</div><div className="text-sm mt-1">React</div></div>
              <div className="p-3 bg-white rounded-md shadow"><div className="text-xl">🔧</div><div className="text-sm mt-1">Git</div></div>
              <div className="p-3 bg-white rounded-md shadow"><div className="text-xl">📱</div><div className="text-sm mt-1">Responsive</div></div>
            </div>
          </section>

          {/* Education */}
<section id="education" className="rounded-lg p-8">
  <h2 className="text-2xl font-semibold mb-3 text-[#0F172A]">Education</h2>
  <p className="text-[#0F172A]/90 mb-2">
    BCA from Himachal Pradesh University, Shimla
  </p>
  <p className="text-[#0F172A]/90">
    MCA (Master of Computer Applications) – currently pursuing
  </p>
</section>


          {/* Resume */}
          <section id="resume" className="rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-[#0F172A]">Resume</h2>
            <a
              href="/vanshika chouhan_124554.pdf"
              download
              className="inline-block px-6 py-3 rounded-2xl shadow bg-[#0F172A] text-white"
            >
              Download Resume
            </a>
          </section>

          {/* Contact */}
          <section id="contact" className="rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-3 text-[#0F172A]">Contact</h2>
            <p className="text-[#0F172A]/90">
              Email:{" "}
              <a href="mailto:chouhanvanshika336@gmail.com" className="underline">
                chouhanvanshika336@gmail.com
              </a>
            </p>
            <p className="mt-2 text-[#0F172A]/90">
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/vanshika-chouhan-1391242aa" target="_blank" rel="noreferrer" className="underline">
                LinkedIn
              </a>
            </p>
            <p className="mt-2 text-[#0F172A]/90">
  Phone:{" "}
  <a href="tel:+919015312582" className="underline">
    +91 90153 12582
  </a>
</p>

          </section>
        </div>
      </main>

      {/* Footer (boxed) */}
      <footer className={`${headerBg} text-white py-8`}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          © {new Date().getFullYear()} Vanshika Chouhan
        </div>
      </footer>
    </div>
  );
}














import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, Award, Menu, X, Download, Eye, Phone, Instagram, GraduationCap } from 'lucide-react';
import profileImage from './image/img.jpg';

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const fullText = "Hi, I'm Prashant";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let timer;
    
    const handleTyping = () => {
      const currentText = fullText;
      
      if (!isDeleting && typedText === currentText) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      } else {
        const shouldDelete = isDeleting;
        const updatedText = shouldDelete
          ? currentText.substring(0, typedText.length - 1)
          : currentText.substring(0, typedText.length + 1);
        
        setTypedText(updatedText);
        timer = setTimeout(handleTyping, shouldDelete ? 50 : 100);
      }
    };
    
    timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timer);
  }, [typedText, isDeleting]);

  const projects = [
    {
      title: "To-Do App (Spring Boot)",
      description: "A RESTful backend application that allows users to manage daily tasks with full CRUD functionality and database integration.",
      tech: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "REST API"],
      link: "https://github.com/Prxshxnt/Todo-spring-boot.git"
    },
    {
      title: "Know Your Road 🛣️",
      description: "A web app that lets users scan QR codes on roads to instantly view details like project cost, contractors, and officials involved. Currently a work in progress.",
      tech: ["MERN Stack", "Tailwind CSS", "QR Code"],
      link: "https://github.com/Chirag953/Know-Your-Road.git"
    },
    {
      title: "Employee Management System",
      description: "A backend REST API application for managing employee records with secure role-based access control (USER/ADMIN).",
      tech: ["Java", "Spring Boot", "Spring Security", "MySQL", "BCrypt"],
      link: "https://github.com/Prxshxnt/Employee-Management-System-REST-API--springboot.git"
    },
    {
      title: "Web Development Project",
      description: "A full-featured web application showcasing modern web development practices and responsive design.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Prxshxnt/WEB_PROJECT_NEW.git"
    }
  ];

  const skillsByCategory = [
    {
      category: "Frontend Technologies",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      category: "Backend Technologies",
      skills: ["Java", "Spring Framework", "SpringBoot", "REST API", "Microservices"]
    },
    {
      category: "Core Programming",
      skills: ["OOPS", "DSA (Data Structures & Algorithms)"]
    },
    {
      category: "Database Technologies",
      skills: ["DBMS", "MySQL", "MySQL Workbench 8.0 CE"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Postman", "Git & GitHub", "VS Code", "IntelliJ"]
    }
  ];

  const certifications = [
    {
      title: "Java Certification",
      issuer: "Concept & Coding",
      icon: "☕",
      pdfUrl: "/Certificate/java spring boot.pdf"
    },
    {
      title: "SpringBoot Certification",
      issuer: "Concept & Coding",
      icon: "🍃",
      pdfUrl: "/Certificate/java spring boot.pdf"
    },
    {
      title: "Adobe India Hackathon",
      issuer: "Adobe",
      description: "Hackathon Participation Certificate",
      icon: "🏆",
      pdfUrl: "/Certificate/adobe-hackathon.pdf"
    },
    {
      title: "Vision to Venture 2025",
      issuer: "Techno India Siliguri Institute of Technology",
      description: "Hackathon Participation",
      icon: "💡",
      pdfUrl: "/Certificate/vision-to-venture.pdf"
    },
    {
      title: "CodeSynthesis",
      issuer: "Guru Tegh Bahadur 4th Centenary Engineering College, Delhi",
      description: "Merging Innovation with Sustainable Impact",
      icon: "🌱",
      pdfUrl: "/Certificate/codesynthesis.pdf"
    },
    {
      title: "NCC 'A' Certificate",
      issuer: "DMG Inter College Daurli Meerut",
      year: "2020",
      icon: "🎖️",
      pdfUrl: "/Certificate/nccA.pdf"
    },
    {
      title: "NCC 'B' Certificate",
      issuer: "DMG Inter College Daurli Meerut",
      year: "2022",
      icon: "🎖️",
      pdfUrl: "/Certificate/nccB.pdf"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes slowBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .slow-blink {
          animation: slowBlink 1.5s infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glowPulse {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.4),
                        0 0 40px rgba(59, 130, 246, 0.3),
                        0 0 60px rgba(59, 130, 246, 0.2);
          }
          50% { 
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.6),
                        0 0 60px rgba(59, 130, 246, 0.4),
                        0 0 90px rgba(59, 130, 246, 0.3);
          }
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        .glow-pulse {
          animation: glowPulse 3s ease-in-out infinite;
        }
        .nav-link {
          position: relative;
          font-size: 1.125rem;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 3px;
          bottom: -6px;
          left: 50%;
          background: currentColor;
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border-radius: 2px;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .logo-name {
          position: relative;
          display: inline-block;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .logo-name:hover {
          transform: translateY(-2px);
        }
      `}</style>

      {/* Enhanced Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-xl transition-all duration-500 ${
        scrolled 
          ? isDark 
            ? 'bg-black/95 shadow-2xl border-b border-gray-800' 
            : 'bg-white/95 shadow-2xl border-b border-gray-200'
          : isDark 
            ? 'bg-black/80 border-b border-gray-800' 
            : 'bg-white/80 border-b border-gray-200'
      }`}>
        <div className="max-w-full px-6 lg:px-12">
          <div className={`flex justify-between items-center transition-all duration-300 ${
            scrolled ? 'py-4' : 'py-6'
          }`}>
            {/* Logo - Left Corner */}
            <h1 className={`font-bold transition-all duration-300 ${
              scrolled ? 'text-2xl lg:text-3xl' : 'text-3xl lg:text-4xl'
            }`}>
              <a href="#home" className="logo-name">
                <span className={isDark ? 'text-white' : 'text-black'}>
                  Prashant
                </span>
              </a>
            </h1>
            
            {/* Right Side - Navigation Links + Controls */}
            <div className="flex items-center gap-6 lg:gap-8">
              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center gap-10 xl:gap-12">
                <a href="#home" className="nav-link hover:text-black-500 transition-colors font-semibold cursor-pointer">
                  Home
                </a>
                <a href="#about" className="nav-link hover:text-black-500 transition-colors font-semibold cursor-pointer">
                  About
                </a>
                <a href="#skills" className="nav-link hover:text-black-500 transition-colors font-semibold cursor-pointer">
                  Skills
                </a>
                <a href="#certifications" className="nav-link hover:text-black-500 transition-colors font-semibold cursor-pointer">
                  Certifications
                </a>
                <a href="#projects" className="nav-link hover:text-black-500 transition-colors font-semibold cursor-pointer">
                  Projects
                </a>
                <a href="#contact" className="nav-link hover:text-black-500 transition-colors font-semibold cursor-pointer">
                  Contact
                </a>
              </div>
              
              {/* Controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsDark(!isDark)}
                  className={`p-3 lg:p-4 rounded-xl transition-all hover:scale-110 ${
                    isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {isDark ? <Sun size={24} /> : <Moon size={24} />}
                </button>
                
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`lg:hidden p-3 rounded-xl transition-all hover:scale-110 ${
                    isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`lg:hidden border-t ${
            isDark ? 'border-gray-800 bg-black' : 'border-gray-200 bg-white'
          }`}>
            <div className="px-6 py-6 flex flex-col gap-5">
              <a 
                href="#home" 
                onClick={() => setIsMenuOpen(false)}
                className="nav-link hover:text-black-500 transition-colors font-semibold cursor-pointer text-xl py-2"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={() => setIsMenuOpen(false)}
                className="nav-link hover:text-black-500 transition-colors font-semibold cursor-pointer text-xl py-2"
              >
                About
              </a>
              <a 
                href="#skills" 
                onClick={() => setIsMenuOpen(false)}
                className="nav-link hover:text-black-500 transition-colors font-semibold cursor-pointer text-xl py-2"
              >
                Skills
              </a>
              <a 
                href="#certifications" 
                onClick={() => setIsMenuOpen(false)}
                className="nav-link hover:text-black-500 transition-colors font-semibold cursor-pointer text-xl py-2"
              >
                Certifications
              </a>
              <a 
                href="#projects" 
                onClick={() => setIsMenuOpen(false)}
                className="nav-link hover:text-black-500 transition-colors font-semibold cursor-pointer text-xl py-2"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="nav-link hover:text-black-500 transition-colors font-semibold cursor-pointer text-xl py-2"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-44 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
           {/* Profile Image with Enhanced Animations */}
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto relative float-animation">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 glow-pulse"></div>
              <img 
                src={profileImage} 
                alt="Prashant" 
                className={`relative w-full h-full rounded-full object-cover shadow-2xl border-4 transition-all duration-300 hover:scale-105 ${
                  isDark ? 'border-blue-500' : 'border-blue-500'
                }`}
              />
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold min-h-[60px] md:min-h-[90px]">
              <span className={isDark ? 'text-white' : 'text-black'}>
                {typedText}
              </span>
              <span className="slow-blink ml-1">|</span>
            </h1>
            <p className={`text-xl md:text-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Final-year CSE student developing secure backend applications using Java & Spring Boot — strong in DSA & SQL, with foundational frontend skills.
            </p>
            
            {/* Social and Resume Links */}
            <div className="flex flex-wrap gap-5 justify-center pt-6">
              <a href="https://github.com/Prxshxnt" target="_blank" rel="noopener noreferrer" className={`p-4 rounded-lg transition-all hover:scale-110 ${
                isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-100 shadow-md'
              }`}>
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/prxshxnt" target="_blank" rel="noopener noreferrer" className={`p-4 rounded-lg transition-all hover:scale-110 ${
                isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-100 shadow-md'
              }`}>
                <Linkedin size={28} />
              </a>
            {/* Resume Buttons */}
   <a href="/Certificate/resume.pdf" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 px-6 py-4 rounded-lg transition-all hover:scale-110 ${
     isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-100 shadow-md'
   }`}>
     <Eye size={22} />
     <span className="text-base font-medium">View Resume</span>
   </a>
   <a href="/Certificate/resume.pdf" download="Prashant_Resume.pdf" className={`flex items-center gap-3 px-6 py-4 rounded-lg transition-all hover:scale-110 ${
     isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-100 shadow-md'
   }`}>
     <Download size={22} />
     <span className="text-base font-medium">Download</span>
   </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-14">
            <User className="text-blue-500" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          </div>
          <div className={`p-10 md:p-12 rounded-2xl transition-colors ${
            isDark ? 'bg-gray-900/80' : 'bg-white shadow-lg'
          }`}>
            <p className={`text-xl md:text-2xl leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <strong className="text-2xl md:text-3xl">Driven Final-Year B.Tech CSE Student | Aspiring Full Stack Engineer</strong>
            </p>
            <p className={`text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm Prashant Chauhan, a final-year Computer Science Engineering student focused on building scalable, 
              production-ready web applications. I specialize in Java, Spring Boot, React, and MySQL, delivering clean 
              and efficient full-stack solutions. With a strong foundation in Data Structures, Algorithms, and OOP, 
              I write structured, optimized code and follow best development practices. I have developed applications 
              involving REST APIs, authentication, database integration, and responsive interfaces. Comfortable with 
              Git workflows and collaborative environments, I am seeking an opportunity to contribute meaningfully, 
              take ownership, and grow as a dependable Full Stack Developer.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section - UPDATED RESPONSIVE VERSION */}
      <section id="skills" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 sm:gap-4 mb-10 md:mb-14">
            <Award className="text-purple-500" size={32} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Skills & Technologies</h2>
          </div>
          
          {skillsByCategory.map((categoryData, idx) => (
            <div 
              key={idx} 
              className={`mb-8 md:mb-10 lg:mb-12 p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl md:rounded-2xl transition-all ${
                isDark ? 'bg-gray-900/80 hover:bg-gray-900' : 'bg-white shadow-lg hover:shadow-xl'
              }`}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {categoryData.category}
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5">
                {categoryData.skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className={`group px-4 py-2.5 sm:px-5 sm:py-3 md:px-7 md:py-4 rounded-full transition-all hover:scale-105 md:hover:scale-110 cursor-pointer ${
                      isDark 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-blue-500/30' 
                        : 'bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 border border-blue-200'
                    }`}
                  >
                    <span className="font-semibold text-sm sm:text-base md:text-lg whitespace-nowrap">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-14">
            <GraduationCap className="text-orange-500" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold">Certifications & Achievements</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-xl transition-all hover:scale-105 ${
                  isDark ? 'bg-gray-900/80 hover:bg-gray-900' : 'bg-white shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className={`text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {cert.issuer}
                </p>
                {cert.description && (
                  <p className={`text-sm mt-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    {cert.description}
                  </p>
                )}
                {cert.year && (
                  <p className={`text-sm mt-2 font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    {cert.year}
                  </p>
                )}
                
                {/* PDF buttons if PDF exists */}
                {cert.pdfUrl && (
                  <div className="flex gap-3 mt-6">
                    <a 
                      href={cert.pdfUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:scale-105 text-sm font-medium ${
                        isDark 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'bg-blue-500 hover:bg-blue-600 text-white'
                      }`}
                    >
                      <Eye size={16} />
                      View
                    </a>
                    <a 
                      href={cert.pdfUrl} 
                      download
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:scale-105 text-sm font-medium ${
                        isDark 
                          ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                          : 'bg-gray-600 hover:bg-gray-700 text-white'
                      }`}
                    >
                      <Download size={16} />
                      Download
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-14">
            <Briefcase className="text-green-500" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`p-8 rounded-xl transition-all hover:scale-105 ${
                isDark ? 'bg-gray-900/80 hover:bg-gray-900' : 'bg-white shadow-lg hover:shadow-xl'
              }`}>
                <div className="flex items-start justify-between mb-6">
                  <Code className="text-blue-500" size={32} />
                  <a href={project.link} className={`p-2 rounded-lg transition-colors ${
                    isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                  }`}>
                    <ExternalLink size={24} />
                  </a>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{project.title}</h3>
                <p className={`mb-5 text-base md:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <span key={i} className={`px-4 py-2 rounded-full text-sm md:text-base ${
                      isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Get In Touch</h2>
          <p className={`text-xl md:text-2xl mb-10 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>

          </p>
          <button 
            onClick={() => window.location.href = 'mailto:prashantprajapati902k@gmail.com'}
            className={`px-10 py-5 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 cursor-pointer ${
              isDark 
                ? 'bg-gray-900 text-white hover:bg-gray-800' 
                : 'bg-zinc-900 text-white hover:bg-zinc-800'
            }`}
          >
            Contact Me
          </button>
          
          {/* Contact Details */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            {/* Email */}
            <div className={`p-8 rounded-xl transition-all hover:scale-105 ${
              isDark ? 'bg-gray-900/80' : 'bg-white shadow-lg'
            }`}>
              <Mail className="mx-auto mb-5 text-blue-500" size={40} />
              <h3 className="font-bold mb-3 text-lg md:text-xl">Email</h3>
              <a href="mailto:prashantprajapati902k@gmail.com" className={`text-sm md:text-base break-all ${
                isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
              }`}>
                prashantprajapati902k@gmail.com
              </a>
            </div>
            
            {/* Mobile */}
            <div className={`p-8 rounded-xl transition-all hover:scale-105 ${
              isDark ? 'bg-gray-900/80' : 'bg-white shadow-lg'
            }`}>
              <Phone className="mx-auto mb-5 text-green-500" size={40} />
              <h3 className="font-bold mb-3 text-lg md:text-xl">Mobile</h3>
              <a href="tel:+917248212923" className={`text-sm md:text-base ${
                isDark ? 'text-gray-400 hover:text-green-400' : 'text-gray-600 hover:text-green-600'
              }`}>
                +91 7248212923
              </a>
            </div>
            
            {/* Instagram */}
            <div className={`p-8 rounded-xl transition-all hover:scale-105 ${
              isDark ? 'bg-gray-900/80' : 'bg-white shadow-lg'
            }`}>
              <Instagram className="mx-auto mb-5 text-pink-500" size={40} />
              <h3 className="font-bold mb-3 text-lg md:text-xl">Instagram</h3>
              <a href="https://www.instagram.com/__prxshxnt__?igsh=MTg1d2loNzZicnNkZg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className={`text-sm md:text-base ${
                isDark ? 'text-gray-400 hover:text-pink-400' : 'text-gray-600 hover:text-pink-600'
              }`}>
                @__prxshxnt__
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-10 px-6 border-t transition-colors ${
        isDark ? 'border-gray-700' : 'border-gray-200'
      }`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`text-base md:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2026 Prashant.
          </p>
        </div>
      </footer>
    </div>
  );
}
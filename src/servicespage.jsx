import React from "react";

// Import all images
import software from "./assets/software.png";
import uiux from "./assets/uiux.png";
import mobile from "./assets/mobile.png";
import microsoft from "./assets/microsoft.png";
import frontend from "./assets/frontend.png";
import clouds from "./assets/clouds.png";
import blockchain from "./assets/blockchain.png";
import backend from "./assets/backend.png";
import arvr from "./assets/arvr.png";
import aiml from "./assets/aiml.png";

// Card data
const services = [
  {
    title: "Software Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum facilis consequatur perspiciatis repudiandae ut laborum explicabo quis, dolorum corporis atque at possimus nam enim accusantium veritatis aperiam! Velit, soluta sequi.",
    tags: ["Django", "Java", "Integration", "Web and Desktop"],
    image: software,
  },
  {
    title: "Mobile App Development",
    description:
      "From concept to launch, we create mobile apps that combine intuitive design with high performance. Our apps are optimized for iOS, Android, or both — helping you connect with users anytime, anywhere.",
    tags: ["iOS & Android", "Flutter", "React Native"],
    image: mobile,
  },
  {
    title: "UI/UX Design",
    description:
      "We create designs that don’t just look good — they work beautifully. Our team focuses on intuitive user flows, engaging visuals, and seamless interactions that turn visitors into loyal customers.",
    tags: ["Wireframing", "Prototypes", "User Research"],
    image: uiux,
  },
  {
    title: "Front End Development",
    description:
      "We craft interactive, visually appealing interfaces that keep users engaged. Our frontend solutions are responsive, accessible, and built for speed, ensuring a seamless experience on every device.",
    tags: ["HTML & CSS", "JavaScript", "React", "Responsive"],
    image: frontend,
  },
  {
    title: "Back End Development",
    description:
      "Our backend solutions ensure your systems run smoothly, securely, and at scale. We build robust server-side architectures that power your apps with speed and reliability.",
    tags: ["Node.js", "Python", "SQL", "REST"],
    image: backend,
  },
  {
    title: "AI & ML Development",
    description:
      "We help businesses harness artificial intelligence to automate tasks, uncover insights, and make smarter decisions. From predictive models to intelligent chatbots, we turn data into results.",
    tags: ["Machine Learning", "NLP", "Chatbot"],
    image: aiml,
  },
  {
    title: "Microsoft Development",
    description:
      "Our Microsoft development expertise enables us to deliver secure, enterprise-grade applications that integrate seamlessly with your existing systems.",
    tags: [".NET", "C#", "Azure"],
    image: microsoft,
  },
  {
    title: "Blockchain Development",
    description:
      "We design and develop blockchain-powered solutions for secure, transparent, and decentralized operations. Ideal for businesses seeking to innovate in fintech, supply chain, or data management.",
    tags: ["Ethereum", "Polygon", "Smart Contract"],
    image: blockchain,
  },
  {
    title: "AR/VR Development",
    description:
      "We create immersive AR and VR experiences that transform how users interact with products, services, and brands.",
    tags: ["Unity", "Unreal Engine", "ARKit"],
    image: arvr,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Our cloud and DevOps services ensure your applications are scalable, secure, and always up-to-date.",
    tags: ["AWS", "Google", "CI/CD"],
    image: clouds,
  },
];
const ServiceCard = ({ title, description, tags, image }) => (
  <div
    className="flex flex-col lg:flex-row w-full max-w-[1113px] bg-[#151515] rounded-lg overflow-hidden shadow-lg
               border border-[#222] transition-transform hover:scale-[1.01] gap-6"
    style={{ borderRadius: "12px" }}
  >
    {/* Image container with padding */}
    <div className="flex-shrink-0 flex justify-center items-center p-3 lg:p-4">
      <div
        className="bg-[#1E1E1E] rounded-lg overflow-hidden"
        style={{
          width: "299px",
          height: "200px",
          borderRadius: "12px",
        }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center rounded-lg"
        />
      </div>
    </div>

    {/* Text */}
    <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-8 w-full">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-dm text-white mb-3 leading-snug">
        {title}
      </h2>
      <p className="font-dm text-sm sm:text-base text-[#B9B9B9] mb-5 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-[#323232] px-3 py-1 rounded-full text-xs sm:text-sm text-white"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);


const ServicePage = () => {
  return (
    <section className="bg-black py-10 sm:py-14">
      <div className="flex flex-col items-center px-4 sm:px-6 lg:px-0 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicePage;

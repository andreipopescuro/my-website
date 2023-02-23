import "./projects.css";
import { useInView } from "react-intersection-observer";
import FadeIn from "./FadeIn";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="projects">
      <FadeIn className="projects-title">
        Projects:
        <span className="square-bracket" style={{ marginLeft: "5px" }}>
          &#91;
        </span>
      </FadeIn>
      <FadeIn className="project">
        <Project
          technologies={[
            "React",
            "Redux",
            "Node",
            "MongoDB",
            "Express",
            "Stripe",
          ]}
          imgSrc={"/images/nike-shop-img.png"}
          title={"FULL STACK E-COMMERCE"}
          websiteHref={"https://nike-shop-app.onrender.com/"}
          githubHref={"https://github.com/andreipopescuro/nike-shop-frontend"}
        />
      </FadeIn>
      <FadeIn className="project">
        <Project
          technologies={["Next.js", "Chakra-ui", "MongoDB", "Swiper"]}
          imgSrc={"/images/movie-img.png"}
          title={"MOVIE APP"}
          websiteHref={"https://moviebase-omega.vercel.app/"}
          githubHref={
            "https://github.com/andreipopescuro/p2-dn-moviebase/tree/feauture-week-one"
          }
        />
      </FadeIn>
      <FadeIn className="project">
        <Project
          technologies={["HTML", "CSS", "Javascript"]}
          imgSrc={"/images/calculator-img.png"}
          title={"Calculator"}
          websiteHref={"https://elaborate-smakager-72920c.netlify.app/"}
          githubHref={"https://github.com/andreipopescuro/simple-js-calculator"}
        />
      </FadeIn>
      <FadeIn className="project">
        <Project
          technologies={["HTML", "CSS", "Javascript", "Firebase"]}
          imgSrc={"/images/game-img.png"}
          title={"Game"}
          websiteHref={"https://clever-monstera-922cf5.netlify.app/"}
          githubHref={"https://github.com/andreipopescuro/mole-game"}
        />
      </FadeIn>
      <FadeIn className="project">
        <Project
          technologies={["HTML", "Javascript", "CSS", "Contenful"]}
          imgSrc={"/images/shop-img.png"}
          title={"Shop"}
          websiteHref={"https://clever-klepon-5dfadc.netlify.app/"}
          githubHref={"https://github.com/andreipopescuro/ls-shop"}
        />
      </FadeIn>
      <FadeIn className="project">
        <Project
          technologies={["HTML", "Javascript", "CSS"]}
          imgSrc={"/images/portofolio-img.png"}
          title={"Portofolio"}
          websiteHref={"https://mellow-kulfi-6b7fa1.netlify.app/"}
          githubHref={"https://github.com/andreipopescuro/html-portofolio"}
        />
      </FadeIn>
      <FadeIn className="project">
        <Project
          technologies={["React", "ChatGPT", "Tidio"]}
          imgSrc={"/images/chat-bots-img.png"}
          title={"Chat Bots"}
          websiteHref={"https://bot-a591.onrender.com/"}
          githubHref={"https://github.com/andreipopescuro/simple-bots"}
        />
      </FadeIn>
      <FadeIn className="project">
        <Project
          technologies={["React", "ChatGPT", "Tailwind"]}
          imgSrc={"/images/find-game-img.png"}
          title={"Find Your Game"}
          websiteHref={"https://find-game.onrender.com"}
          githubHref={"https://github.com/andreipopescuro/find-my-game"}
          last={true}
        />
      </FadeIn>
      <div className="source-code">
        <a href="https://github.com/andreipopescuro/my-website" target="_blank">
          Source code
        </a>
      </div>
    </div>
  );
};

export default Projects;

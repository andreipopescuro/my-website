import "./projects.css";
import { useInView } from "react-intersection-observer";
import FadeIn from "./FadeIn";
import Project from "./Project";
import NikeShopImg from "../../../assets/images/nike-shop-img.png";
import MovieBaseImg from "../../../assets/images/movie-img.png";
import CalculatorImg from "../../../assets/images/calculator-img.png";
import ChatBotsImg from "../../../assets/images/chat-bots-img.png";
import FindMyGameImg from "../../../assets/images/find-game-img.png";
import PortofolioImg from "../../../assets/images/portofolio-img.png";
import ShopImg from "../../../assets/images/shop-img.png";
import GameImg from "../../../assets/images/game-img.png";
import TodoImg from "../../../assets/images/todo-app-img.png";
import SocialImg from "../../../assets/images/social-img.png";
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
            "React-query",
            "Chakra-ui",
            "Node",
            "MongoDB",
            "Express",
          ]}
          imgSrc={SocialImg}
          title={"Social media"}
          websiteHref={"https://social-media-frontend-isoo.onrender.com"}
          githubHref={
            "https://github.com/andreipopescuro/social-media-frontend"
          }
        />
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
          imgSrc={NikeShopImg}
          title={"E-commerce"}
          websiteHref={"https://nike-shop-app.onrender.com/"}
          githubHref={"https://github.com/andreipopescuro/nike-shop-frontend"}
        />
      </FadeIn>
      <FadeIn className="project">
        <Project
          technologies={["Next.js", "Chakra-ui", "MongoDB", "Swiper"]}
          imgSrc={MovieBaseImg}
          title={"Movies"}
          websiteHref={"https://moviebase-omega.vercel.app/"}
          githubHref={
            "https://github.com/andreipopescuro/p2-dn-moviebase/tree/feauture-week-one"
          }
        />
      </FadeIn>
      <FadeIn>
        <Project
          technologies={["PostgreSQL", "Express", "Prisma", "React"]}
          imgSrc={TodoImg}
          title={"Todo app"}
          websiteHref={"https://todo-app-pope.onrender.com/"}
          githubHref={
            "https://github.com/andreipopescuro/postgresql-react-todo-frontend"
          }
        />
      </FadeIn>
      <FadeIn className="project">
        <Project
          technologies={["React", "ChatGPT", "Tailwind"]}
          imgSrc={FindMyGameImg}
          title={"Find Your Game"}
          websiteHref={"https://find-game.onrender.com"}
          githubHref={"https://github.com/andreipopescuro/find-my-game"}
        />
      </FadeIn>
      <FadeIn className="project">
        <Project
          technologies={["React", "ChatGPT", "Tidio"]}
          imgSrc={ChatBotsImg}
          title={"Chat Bots"}
          websiteHref={"https://bot-a591.onrender.com/"}
          githubHref={"https://github.com/andreipopescuro/simple-bots"}
        />
      </FadeIn>
      <FadeIn className="project">
        <Project
          technologies={["HTML", "CSS", "Javascript", "Firebase"]}
          imgSrc={GameImg}
          title={"Game"}
          websiteHref={"https://clever-monstera-922cf5.netlify.app/"}
          githubHref={"https://github.com/andreipopescuro/mole-game"}
        />
      </FadeIn>
      <FadeIn className="project">
        <Project
          technologies={["HTML", "Javascript", "CSS"]}
          imgSrc={PortofolioImg}
          title={"Portofolio"}
          websiteHref={"https://mellow-kulfi-6b7fa1.netlify.app/"}
          githubHref={"https://github.com/andreipopescuro/html-portofolio"}
        />
      </FadeIn>
      <FadeIn className="project">
        <Project
          technologies={["HTML", "CSS", "Javascript"]}
          imgSrc={CalculatorImg}
          title={"Calculator"}
          websiteHref={"https://elaborate-smakager-72920c.netlify.app/"}
          githubHref={"https://github.com/andreipopescuro/simple-js-calculator"}
        />
      </FadeIn>
      <FadeIn className="project">
        <Project
          technologies={["HTML", "Javascript", "CSS", "Contenful"]}
          imgSrc={ShopImg}
          title={"Shop"}
          websiteHref={"https://clever-klepon-5dfadc.netlify.app/"}
          githubHref={"https://github.com/andreipopescuro/ls-shop"}
          last={true}
        />
      </FadeIn>
    </div>
  );
};

export default Projects;

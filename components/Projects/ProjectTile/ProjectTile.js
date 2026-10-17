import { useEffect, useRef } from "react";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";
import styles from "./ProjectTile.module.scss";

const tiltOptions = {
  max: 5,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
  gyroscope: false,
};

const ProjectTile = ({ project, classes, isDesktop }) => {
  const projectCard = useRef(null);

  const { name, description, gradient, url, tech } = project;

  let additionalClasses = "";
  if (classes) {
    additionalClasses = classes;
  }

  useEffect(() => {
    const node = projectCard.current;
    VanillaTilt.init(node, tiltOptions);
    return () => node?.vanillaTilt?.destroy();
  }, []);

  return (
    <a
      href={url || undefined}
      className={`overflow-hidden rounded-3xl snap-start link ${additionalClasses}`}
      target="_blank"
      rel="noreferrer"
      style={{
        maxWidth: isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div
        ref={projectCard}
        className={`${styles.projectTile} rounded-3xl relative p-6 flex flex-col justify-between max-w-full`}
        style={{
          background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
        }}
      >
        <Image
          src="/project-bg.svg"
          alt=""
          className="absolute w-full h-full top-0 left-0 opacity-20 rounded-3xl"
          fill
        />
        {!isDesktop && (
          <div
            className="absolute bottom-0 left-0 w-full h-20"
            style={{
              background: `linear-gradient(0deg, ${gradient[0]} 10%, rgba(0,0,0,0) 100%)`,
            }}
          />
        )}
        <h3
          className="font-medium text-2xl sm:text-3xl z-10 pl-2 pt-2 transform-gpu"
          style={{ transform: "translateZ(3rem)" }}
        >
          {name}
        </h3>
        <div className="z-10 flex flex-wrap gap-2 px-2 my-auto transform-gpu">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-black/25 px-3 py-1 text-xs font-mono text-white"
            >
              {item}
            </span>
          ))}
        </div>
        <p
          className="text-lg z-10 tracking-wide font-medium text-white transform-gpu"
          style={{ transform: "translateZ(0.8rem)" }}
        >
          {description}
        </p>
      </div>
    </a>
  );
};

export default ProjectTile;

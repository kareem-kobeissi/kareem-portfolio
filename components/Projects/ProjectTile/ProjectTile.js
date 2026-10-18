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

  const { name, image, description, gradient, url, sourceUrl, tech } = project;

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
    <article
      className={`overflow-hidden rounded-3xl snap-start ${additionalClasses}`}
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
        {image ? (
          <Image
            src={image}
            alt={`${name} homepage`}
            className="absolute inset-0 h-full w-full rounded-3xl object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 608px"
          />
        ) : (
          <Image
            src="/project-bg.svg"
            alt=""
            className="absolute inset-0 h-full w-full rounded-3xl object-cover opacity-30"
            fill
          />
        )}
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0,0.45) 0%, ${gradient[0]}ee 100%)`,
          }}
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
        <div className="z-10 transform-gpu" style={{ transform: "translateZ(0.8rem)" }}>
          <p className="text-lg tracking-wide font-medium text-white">
            {description}
          </p>
          <div className="mt-4 flex gap-4 font-mono text-sm">
            {url && (
              <a href={url} target="_blank" rel="noreferrer" className="link underline">
                {sourceUrl ? "Live site" : "View project"}
              </a>
            )}
            {sourceUrl && (
              <a href={sourceUrl} target="_blank" rel="noreferrer" className="link underline">
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectTile;

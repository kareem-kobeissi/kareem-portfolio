import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS } from "../../constants";

const labels = {
  frontend: "Frontend",
  backend: "Backend & APIs",
  databases: "Databases",
  mobile: "Mobile",
  security: "Security & Integrations",
  tools: "Tools & Delivery",
  seo: "SEO",
  automation: "Automation",
};

const Skills = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "none" } }).from(
        sectionRef.current.querySelectorAll(".staggered-reveal"),
        { opacity: 0, duration: 0.5, stagger: 0.25 },
        "<",
      );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".skills-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[1].ref}
      aria-label="Skills"
      className="w-full relative select-none mt-44"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="flex flex-col skills-wrapper">
          <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
            SKILLS
          </p>
          <h2 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
            Technical Toolkit
          </h2>
          <p className="text-[1.65rem] font-medium md:max-w-2xl w-full mt-2 staggered-reveal">
            Technologies I use to deliver secure, responsive and maintainable
            products from frontend to deployment.
          </p>

          {Object.entries(SKILLS).map(([group, skills]) => (
            <div className="mt-10 staggered-reveal" key={group}>
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">
                {labels[group]}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-gray-dark-2 bg-gray-dark-3 px-4 py-2 font-mono text-sm text-gray-light-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { CERTIFICATIONS, EDUCATION } from "../../constants";

const Credentials = () => (
  <section aria-label="Education and certifications" className="w-full relative">
    <div className="section-container grid gap-8 py-20 md:grid-cols-2">
      <div className="rounded-3xl border border-gray-dark-2 bg-gray-dark-4 p-8">
        <p className="uppercase tracking-widest text-gray-light-1">Education</p>
        <h2 className="mt-2 text-4xl font-medium text-gradient w-fit">
          Academic Background
        </h2>
        <div className="mt-8 space-y-5">
          {EDUCATION.map((item) => (
            <p key={item} className="text-xl text-gray-light-2">
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-gray-dark-2 bg-gray-dark-4 p-8">
        <p className="uppercase tracking-widest text-gray-light-1">
          Certifications
        </p>
        <h2 className="mt-2 text-4xl font-medium text-gradient w-fit">
          Continued Learning
        </h2>
        <div className="mt-8 space-y-5">
          {CERTIFICATIONS.map((item) => (
            <p key={item} className="text-xl text-gray-light-2">
              {item}
            </p>
          ))}
        </div>
        <p className="mt-8 font-mono text-indigo-light">
          Arabic &amp; English — Full professional proficiency
        </p>
      </div>
    </div>
  </section>
);

export default Credentials;

import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

const projects = [
  {
    image: work1,
    title: "Trots Architects",
    description: "A digital presence designed to match architectural precision.",
  },
  {
    image: work2,
    title: "Refinnd Restaurant",
    description: "An elegant web experience that elevates a premium dining brand.",
  },
  {
    image: work3,
    title: "Overchends Real Estate",
    description: "A luxury property platform built for trust and conversion.",
  },
];

const FeaturedWork = () => {
  return (
    <section id="work" className="section-light" style={{ padding: "140px 0" }}>
      <div className="container-site">
        <h2 className="text-heading-lg mb-20">Featured Work</h2>
        <div className="grid grid-cols-1 gap-16">
          {projects.map((project) => (
            <div key={project.title} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <h3 className="text-subheading font-semibold transition-colors duration-300 group-hover:text-accent-gold">
                {project.title}
              </h3>
              <p className="text-body text-foreground-light mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;

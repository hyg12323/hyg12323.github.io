export default function ProjectCard({
  image,
  title,
  description,
  period,
  stack,
}) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-slate-700
        bg-slate-900/70
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-sky-400/60
        hover:shadow-[0_20px_50px_rgba(56,189,248,0.15)]
      "
    >
      {/* Image */}
      <div className="h-48 overflow-hidden bg-black">
        <img
          src={image}
          alt={title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-lg font-semibold text-slate-100">
          {title}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-slate-400">
          {description}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-300">
            {period}
          </span>

          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-sky-400/40 px-3 py-1 text-sky-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

function ProjectCard({ title, githublink, description, tech }) {
  return (
       <div className="rounded-lg p-6 shadow-lg b hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
       <p className="text-gray-600 mb-3">
  <a
    href={githublink}
    target="_blank"
    rel="noreferrer"
    className="hover:text-blue-600 underline"
  >
    GitHub
  </a>
</p>

      <p className="text-gray-600 mb-3">{description}</p>
      <p className="text-sm text-blue-600">{tech}</p>
    </div>
  )
}
export default ProjectCard;
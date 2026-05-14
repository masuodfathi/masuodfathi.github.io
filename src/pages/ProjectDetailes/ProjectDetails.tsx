import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { projectId } = useParams();

  return (
    <section style={{ padding: "80px 8%" }}>
      <h1>Project Details</h1>
      <p>Project ID: {projectId}</p>
    </section>
  );
}

export default ProjectDetails;

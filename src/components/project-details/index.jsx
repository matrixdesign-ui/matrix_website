import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import TestimonialArea from "@/src/common/testimonial-area";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import ProjectDetailsArea from "./project-details-area";
import projectDataAll from "../../data/project-data";

const ProjectDetails = ({ project }) => {
  const projectData = projectDataAll.find(p =>
    p.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '') ===
    project?.toLowerCase().replace(/[^a-z0-9\-]/g, '')
  );

  const title = projectData ? projectData.title : "Project Details";
  const innertitle = projectData ? `${projectData.title} Project Details` : "Project Details";

  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={title} innertitle={innertitle} />
            <ProjectDetailsArea project={project} />
            <TestimonialArea />
          </main>
          <FooterFive style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;

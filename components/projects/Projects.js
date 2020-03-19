import React from "react";
import Link from "next/link";

import {
  Wrapper,
  Heading,
  Text,
  ProjectsList,
  ProjectItem,
  ProjectInfoWrapper,
  ProjectImg,
  ProjectTitle,
  ProjectDescription,
  StackList,
  StackItem,
  BlueCircle,
  StackText,
  ProjectCtas,
  Cta,
  LinkIcon
} from "./ProjectStyles";

import projects from "./projectsList";

const Projects = () => {
  return (
    <Wrapper>
      <Heading>my projects</Heading>
      <Text>
        I try as much as possible to stay busy and always have a project in the
        works. Take a look at some of the projects I've dedicated my time to.
      </Text>

      <ProjectsList>
        {projects.map((project, i) => (
          <ProjectItem key={i}>
            <ProjectImg src={project.img} alt={project.title} />
            <ProjectInfoWrapper>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <StackList>
                {project.stack.map((item, i) => (
                  <StackItem key={i}>
                    <BlueCircle></BlueCircle>
                    <StackText>{item}</StackText>
                  </StackItem>
                ))}
              </StackList>
              <ProjectCtas>
                <Cta>
                  <Link href={project.live}>
                    <a target="_blank">
                      <span>live url</span>
                      <LinkIcon />
                    </a>
                  </Link>
                </Cta>
                <Cta>
                  <Link href={project.repo}>
                    <a target="_blank">
                      <span>github</span>
                      <LinkIcon />
                    </a>
                  </Link>
                </Cta>
              </ProjectCtas>
            </ProjectInfoWrapper>
          </ProjectItem>
        ))}
      </ProjectsList>
    </Wrapper>
  );
};

export default Projects;

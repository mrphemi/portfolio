import React from "react";
import Link from "next/link";

import {
  Wrapper,
  Heading,
  Text,
  ProjectsList,
  ProjectItem,
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel culpa
        voluptas rerum commodi quisquam dolores, asperiores, molestiae, cum at
        soluta ad aliquid minus a quas ducimus iusto odit! A repudiandae animi
        voluptas error. Voluptate, veritatis. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Necessitatibus quaerat eveniet id.
      </Text>

      <ProjectsList>
        {projects.map((project, i) => (
          <ProjectItem key={i}>
            <ProjectImg src={project.img} alt={project.title} />
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
          </ProjectItem>
        ))}
      </ProjectsList>
    </Wrapper>
  );
};

export default Projects;

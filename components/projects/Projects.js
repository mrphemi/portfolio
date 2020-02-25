import React from "react";

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
  ProjectCtas
} from "./ProjectStyles";

const projects = [
  {
    title: "weather app",
    img: "https://source.unsplash.com/random/800x600/?coding,programming",
    live: "/",
    repo: "/",
    stack: ["HTML", "CSS", "javascript"]
  },
  {
    title: "food app",
    img: "https://source.unsplash.com/random/800x600/?coding,programming",
    live: "/",
    repo: "/",
    stack: ["HTML", "CSS", "javascript"]
  },
  {
    title: "expense app",
    img: "https://source.unsplash.com/random/800x600/?coding,programming",
    live: "/",
    repo: "/",
    stack: ["HTML", "CSS", "javascript"]
  }
];

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
            <ProjectDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              quae quasi quos rerum repellat commodi, fugit omnis repellendus
              inventore alias, at ab odit optio magnam ipsum, accusantium iste
              itaque culpa deserunt reprehenderit vel id nostrum.
              <StackList>
                {project.stack.map((item, i) => (
                  <StackItem key={i}>
                    <BlueCircle></BlueCircle>
                    <StackText>{item}</StackText>
                  </StackItem>
                ))}
              </StackList>
            </ProjectDescription>
          </ProjectItem>
        ))}
      </ProjectsList>
    </Wrapper>
  );
};

export default Projects;

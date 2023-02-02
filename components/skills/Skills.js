import React from "react";

import {
  Wrapper,
  Heading,
  SkillsList,
  Skill,
  SkillText,
  BlueCircle,
  Text,
} from "./SkillsStyles";

const skills = [
  "HTML5",
  "CSS3",
  "javascript (ES6, Node.js)",
  "typescript",
  "react.js",
  "next.js",
  "scss",
  "tailwindcss",
  "git & github",
];

const Skills = () => {
  return (
    <Wrapper>
      <Heading>my skills</Heading>

      <Text>
        Self development is very important as a software developer. Over the
        years, I've learnt and added a couple of technologies to my skillset and
        I plan to explore more technologies and add more skills under my belt.
        Below are a list of technologies, tools and languages I've worked with.
      </Text>

      <SkillsList>
        {skills.map((skill, i) => (
          <Skill key={i}>
            <BlueCircle></BlueCircle>
            <SkillText>{skill}</SkillText>
          </Skill>
        ))}
      </SkillsList>
    </Wrapper>
  );
};

export default Skills;

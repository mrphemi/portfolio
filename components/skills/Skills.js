import React from "react";

import {
  Wrapper,
  Heading,
  SkillsList,
  Skill,
  SkillText,
  BlueCircle,
  Text
} from "./SkillsStyles";

const skills = [
  "HTML5",
  "CSS3",
  "javascript",
  "react",
  "redux",
  "git",
  "node js"
];

const Skills = () => {
  return (
    <Wrapper>
      <Heading>my skills</Heading>

      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
        recusandae eaque fugiat! Alias dicta labore tempore vero hic neque
        aspernatur! Est, soluta fugit praesentium totam cupiditate culpa
        blanditiis maiores pariatur itaque. Inventore eos officiis tempore.
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

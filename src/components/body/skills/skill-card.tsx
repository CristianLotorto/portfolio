import { ReactElement } from "react";
import "./skill-card.css";

interface Skill {
  name: string,
  icon: ReactElement
}

interface Props {
  skill: Skill
}


const SkillCard: React.FC<Props> = ({ skill }) => {
  return (
   <div className="skill-card">
     <div className="skill-icon">{skill.icon}</div>
     <label className="skill-name">{skill.name}</label>
   </div>
  );
}
export default SkillCard;
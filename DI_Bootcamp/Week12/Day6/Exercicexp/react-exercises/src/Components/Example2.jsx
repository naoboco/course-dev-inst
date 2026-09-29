import { Component } from "react";
import data from "../data/data.json";

class Example2 extends Component {
  render() {
    return (
      <div>
        <h3>Skills</h3>

        {data.Skills.map((skill, index) => (
          <div key={index} className="mb-3">
            <h4>{skill.Area}</h4>

            <ul>
              {skill.SkillSet.map((item, itemIndex) => (
                <li key={itemIndex}>
                  {item.Name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;
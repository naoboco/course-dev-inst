import { Component } from "react";
import data from "../data/data.json";

class Example3 extends Component {
  render() {
    return (
      <div>
        <h3>Experiences</h3>

        {data.Experiences.map((experience, index) => (
          <div key={index} className="mb-4">
            <img
              src={experience.logo}
              alt={experience.companyName}
              width="100"
            />

            <h4>
              <a href={experience.url}>
                {experience.companyName}
              </a>
            </h4>

            {experience.roles.map((role, roleIndex) => (
              <div key={roleIndex}>
                <h5>{role.title}</h5>

                <p>{role.description}</p>

                <p>
                  {role.startDate} - {role.endDate}
                </p>

                <p>{role.location}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
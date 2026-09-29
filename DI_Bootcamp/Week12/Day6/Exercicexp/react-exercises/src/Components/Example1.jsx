import { Component } from "react";
import data from "../data/data.json";

class Example1 extends Component {
  render() {
    return (
      <div>
        <h3>Social Medias</h3>

        <ul>
          {data.SocialMedias.map((socialMedia, index) => (
            <li key={index}>
              <a href={socialMedia}>
                {socialMedia}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
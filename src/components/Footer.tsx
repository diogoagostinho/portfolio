import { MdOutlineArrowOutward } from "react-icons/md";

function Footer() {
  return (
    <>
      <div className="about">
        <p className="specialText">About</p>
        <p>
          Currently working and learning russian, guitar playing, oceanography
          and photography. I love the ocean, taking coffee breaks, hiking in the
          mountains and riding enduro trials on a motorcycle.
        </p>
      </div>
      <div className="skills">
        <p className="specialText">Skills</p>
        <li>UI design</li>
        <li>Web development</li>
        <li>3D modeling</li>
        <li>Game development</li>
        <li>Software development</li>
        <li>Photography</li>
        <li>Music production</li>
        <li>Image editing</li>
      </div>
      <div className="contact">
        <p className="specialText">Contact</p>
        <li>
          <div className="textLink">
            <a target="_blank" href="https://github.com/diogoagostinho">
              <p>GitHub</p>
            </a>
            <div className="textLinkArrow">
              <MdOutlineArrowOutward />
            </div>
          </div>
        </li>
        <li>
          <div className="textLink">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/diogo-agostinho-b99a33224/"
            >
              <p>LinkedIn</p>
            </a>
            <div className="textLinkArrow">
              <MdOutlineArrowOutward />
            </div>
          </div>
        </li>
        <li>
          <div className="textLink">
            <a target="_blank" href="https://dev.to/diogoagostinho">
              <p>DEV.to</p>
            </a>
            <div className="textLinkArrow">
              <MdOutlineArrowOutward />
            </div>
          </div>
        </li>

        <li>
          <div className="textLink">
            <a target="_blank" href="https://app.daily.dev/diogoagostinho">
              <p>daily.dev</p>
            </a>
            <div className="textLinkArrow">
              <MdOutlineArrowOutward />
            </div>
          </div>
        </li>
        <br />
        <li>
          <div className="textLink">
            <a href="mailto:contacto.diogoagostinho@gmail.com">
              <p>Email me</p>
            </a>
            <div className="textLinkArrow">
              <MdOutlineArrowOutward />
            </div>
          </div>
        </li>
      </div>
    </>
  );
}

export default Footer;

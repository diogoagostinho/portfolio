import { MdOutlineArrowOutward } from "react-icons/md";

function Footer() {
  return (
    <>
      <div className="about">
        <p className="specialText">About</p>
        <p>
          Currently learning both web development (front-end) and game
          development (unity). Trying to learn ReactJS at the time, along with
          C# for software, had past experience with Blender.
        </p>
      </div>
      <div className="skills">
        <p className="specialText">Skills</p>
        <li>UI Design</li>
        <li>Web Development</li>
        <li>3D Modeling</li>
        <li>Game Development</li>
        <li>Software Development</li>
        <li>Photography</li>
        <li>Music Producer</li>
      </div>
      <div className="contact">
        <p className="specialText">Contact</p>

        <li>
          <div className="textLink">
            <p>LinkedIn</p>
            <div className="textLinkArrow">
              <MdOutlineArrowOutward />
            </div>
          </div>
        </li>
        <li>
          <div className="textLink">
            <p>X</p>
            <div className="textLinkArrow">
              <MdOutlineArrowOutward />
            </div>
          </div>
        </li>
        <li>
          <div className="textLink">
            <p>GitHub</p>
            <div className="textLinkArrow">
              <MdOutlineArrowOutward />
            </div>
          </div>
        </li>
        <li>
          <div className="textLink">
            <p>DEV.to</p>
            <div className="textLinkArrow">
              <MdOutlineArrowOutward />
            </div>
          </div>
        </li>
        <li>
          <div className="textLink">
            <p>Hashnode</p>
            <div className="textLinkArrow">
              <MdOutlineArrowOutward />
            </div>
          </div>
        </li>
        <li>
          <div className="textLink">
            <p>daily.dev</p>
            <div className="textLinkArrow">
              <MdOutlineArrowOutward />
            </div>
          </div>
        </li>
        <p>contacto@diogoagostinho.pt</p>
      </div>
    </>
  );
}

export default Footer;

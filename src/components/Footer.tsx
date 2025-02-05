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

import Button from "./Button";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__left">
          <div className="logo">
            <img src="/public/logo-holographic.png" />
          </div>
          <div className="title">
            <h1>PORTFOLIO</h1>
            <p>by Diogo Agostinho</p>
          </div>
        </div>
        <div className="navbar__right">
          <Button text={"Home"} styleClass={"ghost"} isPop={false} />
          <Button text={"Websites"} styleClass={"ghost"} isPop={false} />
          <Button text={"Photography"} styleClass={"ghost"} isPop={false} />
          <Button text={"Games"} styleClass={"ghost"} isPop={false} />
          <Button text={"Music"} styleClass={"ghost"} isPop={false} />
        </div>
      </div>
    </>
  );
}

export default Navbar;

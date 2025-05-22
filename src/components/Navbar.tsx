import Button from "./Button";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__left">
          <div className="logo">
            <img src="/logo-holographic.png" />
          </div>
          <div className="title">
            <h1>PORTFOLIO</h1>
            <p>by Diogo Agostinho</p>
          </div>
        </div>
        <div className="navbar__right">
          <div className="buttonList">
            <Button
              text={"Home"}
              styleClass={"ghost"}
              isPop={false}
              linkTo={"/"}
              isArrow={false}
            />
            <Button
              text={"Websites"}
              styleClass={"ghost"}
              isPop={false}
              linkTo={"/websites"}
              isArrow={false}
            />
            <Button
              text={"Photography"}
              styleClass={"ghost"}
              isPop={false}
              linkTo={"/photography"}
              isArrow={false}
            />
            <Button
              text={"Games"}
              styleClass={"ghost"}
              isPop={false}
              linkTo={"/games"}
              isArrow={false}
            />
            {/* <Button
              text={"Music"}
              styleClass={"ghost"}
              isPop={false}
              linkTo={"/music"}
              isArrow={false}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

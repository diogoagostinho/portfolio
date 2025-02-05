function Badge(props: { text: string; color: string }) {
  return (
    <>
      <div className={props.color + " badge"}>
        <p>{props.text}</p>
      </div>
    </>
  );
}

export default Badge;

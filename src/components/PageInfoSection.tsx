function PageInfoSection(props: { title: string; text: string }) {
  return (
    <>
      <p className="pageInfoTitle">{props.title}</p>
      <p className="pageInfoText">{props.text}</p>
    </>
  );
}

export default PageInfoSection;

const PageTitle = ({ title, marginLeft = 0 }) => {
  return (
    <h1
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        marginBottom: "1em",
        fontSize: "2em",
      }}
    >
      {title}
    </h1>
  );
};

export default PageTitle;

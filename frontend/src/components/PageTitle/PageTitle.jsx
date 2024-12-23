const PageTitle = ({ title }) => {
  return (
    <h1
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1em",
        fontSize: "2em",
      }}
    >
      {title}
    </h1>
  );
};

export default PageTitle;

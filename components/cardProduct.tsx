const CardProduct = ({ title, picture_url }) => {
  return (
    <div style={{ padding: "1rem .5rem ", border: "solid 2px blue" }}>
      <h2>{title}</h2>
      <img src={picture_url} width="22rem" height="22rem" />
    </div>
  );
};

export { CardProduct };

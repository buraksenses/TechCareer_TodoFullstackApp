const UtilsButton = ({ label, fontColor, backgroundColor }) => {
  const textStyle = {
    color: fontColor,
  };

  const buttonStyle = {
    flex: "1" /* Butonları eşit genişlikte yapar */,
    margin: "0 10px",
    background: backgroundColor,
    border: "1px solid #ccc",
    "border-radius": "5px",
  };

  return (
    <div>
      <button className="utils-button">
        <span style={textStyle}>{label}</span>
      </button>
    </div>
  );
};
export default UtilsButton;

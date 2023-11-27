function Footer({ itemList }) {
  const packedItemNumber = itemList.filter((item) => item.isCheck);
  const packedPercent = Math.ceil(
    (packedItemNumber.length / itemList.length) * 100
  );
  console.log(itemList);
  console.log(packedItemNumber);
  const footerContent = !itemList.length
    ? "You have 0 item in your pocket. Better pack some"
    : `You have ${itemList.length} item in your pocket, and you already packed ${packedItemNumber.length} (${packedPercent}%)`;
  return (
    <div className="app-footer">
      <span>{footerContent}</span>
    </div>
  );
}

export default Footer;

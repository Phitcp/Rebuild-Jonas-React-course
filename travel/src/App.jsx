import Form from "./Form";
import Logo from "./Logo";
import ItemList from "./ItemList";
import Footer from "./Footer";
import { useState } from "react";
function App() {
  const [itemList, setItemList] = useState([]);
  return (
    <div className="app">
      <Logo />
      <Form itemList={itemList} setItemList={setItemList} />
      <ItemList itemList={itemList} setItemList={setItemList} />
      <Footer itemList={itemList} />
    </div>
  );
}

export default App;

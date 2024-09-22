import { useState } from "react";
import HomePages from "./pages/HomePages";

function App() {
  
  const [alert, setAlert] = useState(false);
  const showAlert = () => {
    if (alert === false) {
      setAlert(true);
    } else {
      setAlert(false);
    }
  };
  return (
    <>
      <HomePages />
    </>
    // <Alert>
    //   Hello <span>Worlds </span>{" "}
    // </Alert>
    // <div>
    //   <ListGroup
    //     items={lists}
    //     headings={"Country"}
    //     onSelectedItem={handelSelectedItem}
    //   />
    // </div>
  );
}

export default App;

{
  /* <Buttun showAlert={showAlert}>See Alert</Buttun>
      {alert && <Alert>Alert! This is a message.</Alert>} */
}

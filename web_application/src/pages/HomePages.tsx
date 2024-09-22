import ListGroup from "../components/ListGroup";
import NavBar from "../components/NavBar";

const HomePages = () => {
  const lists = ["Pakistan", "India", "England", "USA", "Japan"];

  const handleSelectedItem = (item: string, index: number) => {
    console.log(item, index);
  };

  return (
    <div>
      <div className="row">
        <NavBar />
        <ListGroup
          items={lists}
          headings="Country"
          onSelectedItem={handleSelectedItem}
        />
      </div>
    </div>
  );
};

export default HomePages;

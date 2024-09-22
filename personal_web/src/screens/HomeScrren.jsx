import AboutUs from "../components/AboutUs";
import Card from "../components/card"; // Ensure correct casing
import ContactUs from "../components/ContactUs";
import Intro from "../components/Intro"; // Ensure correct casing
import data from "../data/data.json";
import intro from "../data/intro.json";

function HomeScreen() {
  return (
    <>
      <Intro
        key={intro[0].id}
        name={intro[0].name}
        profession={intro[0].profession}
        imageUrl={intro[0].imageUrl}
      />
      
      <div className="text-center my-4">
        <h1 className="display-5">Our Team</h1>
      </div>

      <div className="container">
        <div className="row">
          {data.map((user) => (
            <div key={user.id} className="col-md-4 mb-4">
              <Card
                name={user.name}
                email={user.email}
                imageUrl={user.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
      <AboutUs/>
      <ContactUs/>
    </>
  );
}

export default HomeScreen;

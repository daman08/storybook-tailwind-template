import { Button } from "./stories/button/Button";
import { Navbar } from "./stories/NavBar/Navbar";

function App() {
  return (
    <>
      <Navbar
        title="Nava"
        links={[
          { name: "Home", href: "#" },
          { name: "About", href: "#" },
          { name: "Contact", href: "#" },
          { name: "Blog", href: "#" },
        ]}
      />
      <div className="flex justify-center items-center h-full">
        <Button
          backgroundColor="#fcb3b3"
          label="Click Me"
          border
          borderColor="#f60000"
          borderWidth={2}
          onClick={() => alert("Hello World")}
        />
      </div>
    </>
  );
}

export default App;

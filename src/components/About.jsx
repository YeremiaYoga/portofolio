import { TypeAnimation } from "react-type-animation";
const About = () => {
  return (
    <div id="about"  className="h-screen p-20">
      <div>
        <h1 className="font-extrabold text-6xl text-center">About</h1>
        <TypeAnimation
          sequence={[
            "Hallo perkenalkan saya Yeremia Adiel Yoga Sasongko",
            1000,
            () => {
              console.log("Done typing!");
            },
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{
            fontSize: "2em",
            marginTop: "1em",
            marginLeft: "0.5em",
            textAlign: "center",
          }}
        />
      </div>
    </div>
  );
};
export default About;

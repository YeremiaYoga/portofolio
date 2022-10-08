import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div id="home" className="h-full">
      <div className="flex flex-wrap">
        <div className="w-full self-center lg:w-1/2">
          <h1 className="lg:text-8xl text-center font-bold mt-40 text-5xl">Yeremia Yoga🗿</h1>
          <div>
          <TypeAnimation
            sequence={[
              "Hello Friend, I'm Web Developer 🗿.",
              1000,
              "",
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
              marginLeft: "2em",
              marginBottom: "40px",
              
            }}
          />
          </div>
          
          <button className="text-base ml-14 py-3 px-8 bg-transparent hover:bg-sky-500 text-sky-500 font-semibold hover:text-white border border-sky-500 rounded">
            Download Resume
          </button>
          <div className="flex gap-x-12 mt-40 ml-14 lg:mt-80 ">
            <a href="https://github.com/YeremiaYoga">
              <img
                className="w-12 hover:-translate-y-1 hover:scale-110 duration-300"
                alt="github"
                src="/contacts/github.svg"
              ></img>
            </a>

            <a href="https://www.linkedin.com/in/yeremiayoga/">
              <img
                className="w-12 hover:-translate-y-1 hover:scale-110 duration-300"
                alt="linkedin"
                src="/contacts/linkedin.svg"
              ></img>
            </a>
          </div>
        </div>
        <div className="w-full self-end px-4 lg:w-1/2 mt-40">
          <div className="mb-44">
            <div className="relative lg:w-128 lg:h-128 w-96 h-96  
            bg-gradient-to-b  from-sky-500  mx-auto max-w-full rounded-full shadow-lg overflow-hidden">
              <img
                layout="fill"
                objectFit="cover"
                className="animate-wiggle"
                alt="foto"
                src="/images/foto.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

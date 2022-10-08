const Skills = () => {
  return (
    <div id="skills" className="h-full p-20">
      <div className="">
        <h1 className="font-extrabold text-6xl text-center">Skills</h1>
        <div className="">
          <h1 className="font-extrabold text-5xl text-center mt-20">
            Tech Stack
          </h1>
          <div className="flex  justify-center gap-x-36 mt-10">
            <div>
              <h1 className="font-extrabold text-center text-4xl mt-20">
                Frontend
              </h1>
              <div className="flex gap-x-36 mt-10 flex-col md:flex-row md:justify-center items-center">
                <div>
                  <img className="w-24 " alt="html" src="/skills/html.svg"></img>
                  <p className=" text-center font-bold">HTML</p>
                </div>
                <div>
                  <img className="w-24" alt="css" src="/skills/css.svg"></img>
                  <p className="text-center font-bold">CSS</p>
                </div>
                <div>
                  <img className="w-24" alt="js" src="/skills/js.svg"></img>
                  <p className="text-center font-bold">Javascript</p>
                </div>
              </div>
              <div className="flex gap-x-36 mt-10 flex-col md:flex-row md:justify-center items-center">
                <div>
                  <img className="w-24" alt="html" src="/skills/vue.svg"></img>
                  <p className="text-center font-bold">Vue Js</p>
                </div>
                <div>
                  <img
                    className="w-24"
                    alt="css"
                    src="/skills/vuetify.svg"
                  ></img>
                  <p className="text-center font-bold">Vuetify</p>
                </div>
                <div>
                  <img
                    className="w-24"
                    alt="js"
                    src="/skills/tailwind.svg"
                  ></img>
                  <p className="text-center font-bold">Tailwind</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-x-36 mt-10">
            <div>
              <h1 className="font-extrabold text-center text-4xl mt-20">
                Backend
              </h1>
              <div className="flex justify-center gap-x-36 mt-10">
                <div>
                  <img className="w-24" alt="html" src="/skills/laravel.svg"></img>
                  <p className="text-center font-bold">Laravel</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="font-extrabold text-center text-4xl mt-20">
              Databases
            </h1>
            <div className="flex justify-center gap-x-36 mt-10">
              <div>
                <img className="w-30" alt="html" src="/skills/mysql.svg"></img>
                <p className="text-center font-bold">My SQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;

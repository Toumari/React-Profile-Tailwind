import HeroImage from "./components/HeroImage";
import Title from "./components/Title";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="bg-gray-900">
      <div className="font-sans bg-gray-900 h-screen flex flex-col justify-between">
        <HeroImage />
        <Title />
        <AboutMe
          title={"About Me"}
          text={
            "Skilled at testing throughout the system development life cycle from requirement gathering to build and live release as well as implementing process improvements to boost system software quality, usability, performance and efficiency."
          }
        />
        <AboutMe
          title={"Interests"}
          text={
            "Learning new and exciting web frameworks, collecting vinyl records, playing guitar and learning new languages."
          }
        />
        <div className="skill-section  flex flex-col  sm:mx-auto sm:w-full py-8 bg-gray-900">
          <h4 className="text-xl sm:text-2xl  font-bold pb-6 text-white px-8 sm:text-center">
            Skills
          </h4>
          <Skill skillName={"JavaScript"} width={"75"} />
          <Skill skillName={"CSS"} width={"80"} />
          <Skill skillName={"HTML"} width={"85"} />
        </div>

        <Footer />
      </div>
    </div>
  );
}
export default App;

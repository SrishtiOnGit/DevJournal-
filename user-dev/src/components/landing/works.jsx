import { MdAccountCircle } from "react-icons/md";
import { IoIosJournal } from "react-icons/io";
import { FaStackOverflow } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
const Works = () => {
  const works = [
    {
      icon: <MdAccountCircle />,
      title: "Create an Account",
      description: "Create an account with your email and password.",
    },
    {
      icon: <IoIosJournal />,
      title: "Write a Journal",
      description: "Write about everything you learned today.",
    },
    {
      icon: <FaSave />,
      title: "Save a Journal",
      description: "Save every journal and its solution forever.",
    },
    {
      icon: <FaStackOverflow />,
      title: "Organise your Journals",
      description: "Keep your journals organised and easy to find.",
    },
    {
      icon: <FaSearch />,
      title: "Search Anytime",
      description: "Find what you need with our powerful search functionality.",
    },
  ];
  return (
    <div className="features-container" id="works">
      <h2 className="features-title">How it works?</h2>
      <div className="features">
        {works.map((work) => (
          <div className="card" key={work.title}>
            <div className="feature-icon">{work.icon}</div>
            <h3>{work.title}</h3>
            <p>{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;

import { IoIosJournal } from "react-icons/io";
import { FaBug } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa6";
import { SiKnowledgebase } from "react-icons/si";
import { CiHeart } from "react-icons/ci";
import { MdOutlineTimeline } from "react-icons/md";

const Feature = () => {
  const features = [
    {
      icon: <IoIosJournal />,
      title: "Daily Journal",
      description: "Write about everything you learned today.",
    },
    {
      icon: <FaBug />,
      title: "Bug Tracker",
      description: "Save every bug and its solution forever.",
    },
    {
      icon: <FaRegLightbulb />,
      title: "Idea Vault",
      description: "Store startup ideas before you forget them.",
    },
    {
      icon: <SiKnowledgebase />,
      title: "Knowledge Shelf",
      description: "Organize by category and search instantly.",
    },
    {
      icon: <CiHeart />,
      title: "Favourites",
      description: "Pin your most useful notes.",
    },
    {
      icon: <MdOutlineTimeline />,
      title: "Growth Timelines",
      description: "See how you improved over time.",
    },
  ];
  return (
    <div className="features-container" id="features">
      <h2 className="features-title">Everything You Need</h2>
      <div className="features">
        {features.map((feature) => (
          <div className="card" key={feature.title}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;

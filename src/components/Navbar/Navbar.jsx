import "./navbar.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";

export const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          ColmenaDev
        </motion.span>
        <div className="social">
          <a href="https://linkedin.com/in/humbertocolmenares" target="_blank">
            <LinkedInIcon className="social__icons" />
          </a>
          <a href="https://github.com/colmenareshr" target="_blank">
            <GitHubIcon className="social__icons" />
          </a>
        </div>
      </div>
    </div>
  );
};

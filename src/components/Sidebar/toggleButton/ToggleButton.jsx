import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const ToggleButton = ({ setOpen, open }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      {open ? (
        <CloseIcon sx={{ color: "black" }} />
      ) : (
        <MenuIcon sx={{ color: "black" }} />
      )}
    </button>
  );
};

export default ToggleButton;

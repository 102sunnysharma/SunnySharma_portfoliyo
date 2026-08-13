import { FaArrowUp } from "react-icons/fa";

function BackToTop({ visible, onClick }) {
  return (
    <button
      type="button"
      className={`back-to-top ${visible ? "visible" : ""}`}
      aria-label="Back to top"
      onClick={onClick}
    >
      <FaArrowUp />
    </button>
  );
}

export default BackToTop;

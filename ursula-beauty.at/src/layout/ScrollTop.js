import { useEffect } from "react";
import { scrollTopFun } from "../utils";

const ScrollTop = () => {
  useEffect(() => {
    scrollTopFun();
  }, []);
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="scroll-top scroll-to-target"
      id="scroll-top"
      onClick={() => onClick()}
    >
      <span className="fa fa-angle-up" />
    </button>
  );
};
export default ScrollTop;

import { useEffect, useState } from "react";

const Preloader = () => {
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 2000);
  }, []);

  return (
    <div
      className="preloader"
      style={{ display: preloader ? "block" : "none" }}
    />
  );
};
export default Preloader;

import { useEffect } from "react";
import GLightbox from "glightbox";

const useLightbox = () => {
  useEffect(() => {
    GLightbox({});
  }, []);
};

export default useLightbox;

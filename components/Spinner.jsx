import Image from "next/image";
import imgSpinner from "../public/assets/spinner.gif";

const Spinner = () => {
  return (
    <>
      <Image src={imgSpinner} alt="/" className="w-52 m-auto" />
    </>
  );
};

export default Spinner;

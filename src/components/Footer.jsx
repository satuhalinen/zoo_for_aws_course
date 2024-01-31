import { useLocation } from "react-router-dom";
const Footer = () => {
  const { pathname } = useLocation();
  if (pathname == "/") {
    return null;
  }
  return (
    <div>
      <small>Copyright &copy; 2023 Satu Halinen</small>
    </div>
  );
};

export default Footer;

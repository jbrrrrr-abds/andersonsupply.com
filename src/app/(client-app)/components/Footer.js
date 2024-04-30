import Container from "root/components/Container";
import Link from "next/link";

const Footer = ({}) => {
  return (
    <footer className="w-full text-white bg-brandBlack">
      <div className="container py-4 mx-auto">
        <Link className="text-sm" href="/">
          Anderson Bros. Design &amp; Supply
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

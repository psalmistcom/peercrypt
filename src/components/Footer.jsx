import { footernavItems } from "../constants";
const Footer = () => {
  return (
    <footer className="relative mt-10 px-4 pt-10">
      <nav
        aria-label="Footer Navigation"
        className="mx-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left"
      >
        {footernavItems.map((item, index) => (
          <a key={index} href={item.href} className="font-normal text-white">
            {item.label}
          </a>
        ))}
      </nav>
      <p className="mb-5 text-center text-gray-300">
        © 2024 HackaBlock | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;

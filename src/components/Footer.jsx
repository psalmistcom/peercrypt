import { footernavItems } from "../constants";
const Footer = () => {
  return (
    <footer className="flex flex-col mt-10 px-4 pt-10 text-gray-500">
      <nav
        aria-label="Footer Navigation"
        className="mx-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left"
      >
        {footernavItems.map((item, index) => (
          <a key={index} href={item.href} className="font-normal">
            {item.label}
          </a>
        ))}
      </nav>
      <p className="mb-5 text-center">
        © 2024 HackaBlock | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;

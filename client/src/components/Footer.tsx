import { Link } from "react-router-dom";

const Footer = () => {
  const connectWithMe = [
    { icon: "/socialmedias/LinkedIn.png", url: "" },
    { icon: "/tools/github.png", url: "https://github.com/M-Nowfal" },
    { icon: "/socialmedias/email.png", url: "mailto:nowfalmmuhammed@gmail.com" },
    { icon: "/socialmedias/whatsapp.png", url: "https://wa.me/8610297319?text=Hello%20Nowfal%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect." },
  ];

  return (
    <footer className="flex flex-col gap-10 justify-center items-center footer footer-horizontal footer-center bg-gradient-to-tr from-amber-500/30 to-orange-500/30 text-base-content rounded p-10 w-full border-t shadow-2xl shadow-orange-500">
      <h2 className="text-2xl font-bold">Connect with me</h2>
      <p className="font-semibold text-center">I&apos;m open to freelance projects, collaborations, and tech discussions.</p>
      <nav className="flex items-center gap-4">
        {connectWithMe.map((option, index) => (
          <div key={index} role="button" onClick={() => navigator.vibrate(50)}>
            <Link to={option.url} target="_blank">
              <img
                src={option.icon}
                width={500}
                height={500}
                alt="img"
                className={`w-8 ${index === 1 && "dark:invert"}`}
              />
            </Link>
          </div>
        ))}
      </nav>
      <aside className="text-center">
        <p className="font-semibold">Copyright &copy; {new Date().getFullYear()} - All right reserved by Muhammed Nowfal</p>
      </aside>
    </footer>
  );
};

export default Footer;

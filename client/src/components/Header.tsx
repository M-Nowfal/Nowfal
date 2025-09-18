import { Bell, Code, Contact, Eye, Folder, Home, Menu, User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "./ui/dropdown-menu";
import { Badge } from "./ui/badge";
import { useContext, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { MessageView } from "./MessageView";
import { AuthContext } from "@/App";
import ViewsCount from "./ViewsCount";

type MessageType = {
  _id: string,
  name: string,
  email: string,
  message: string,
  createdAt: string
};

const Header = () => {
  const { author, setAuthor } = useContext(AuthContext);
  const [showMessages, setShowMessages] = useState<boolean>(false);
  const [showViews, setShowViews] = useState<boolean>(false);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [views, setViews] = useState<Record<"createdAt", string>[]>([]);

  const getMessages = async () => {
    try {
      if (author) {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/messages`);
        setMessages(res.data.messages || []);
      } else return;
    } catch (err: unknown) {
      const error = err instanceof AxiosError ? err.response?.data?.message : String(err);
      console.error(error);
    }
  };

  const getViews = async () => {
    try {
      if (author) {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/getviews`);
        setViews(res.data || []);
      } else return;
    } catch (err: unknown) {
      const error = err instanceof AxiosError ? err.response?.data?.message : String(err);
      console.error(error);
    }
  };

  useEffect(() => {
    setAuthor(window.localStorage.getItem("author") === "authorized");
    getMessages();
    getViews();
  }, [author]);

  const navLinkStyles = "flex items-center gap-1 hover:-translate-y-1 transition-all duration-200 hover:text-orange-600 text-shadow-lg dark:text-shadow-orange-900";
  const navIconStyles = "size-5 text-gray-500";
  const navLinks = [
    { title: "Home", link: "#hero", icon: <Home className={navIconStyles} /> },
    { title: "About", link: "#about", icon: <User className={navIconStyles} /> },
    { title: "Skills", link: "#skills", icon: <Code className={navIconStyles} /> },
    { title: "Projects", link: "#projects", icon: <Folder className={navIconStyles} /> },
    { title: "Contact", link: "#contact", icon: <Contact className={navIconStyles} /> },
  ];

  const toggleShowMessages = () => {
    setShowMessages(prev => !prev);
  };

  const toggleShowViews = () => {
    setShowViews(prev => !prev);
  };

  return (
    <>
      <header className="flex justify-between items-center p-3 border-b fixed w-full backdrop-blur-2xl z-20">
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button variant="secondary" size="icon" className="cursor-pointer">
              <Menu />
              <span className="sr-only">Toggle links</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="mt-4 ms-4">
            {navLinks.map(link => (
              <DropdownMenuItem key={link.title}>
                <a href={link.link} className="w-full ps-3 pe-10 hover:translate-x-2 my-1 text-lg hover:text-orange-600 font-semibold transition-all duration-200 flex items-center gap-3">
                  {link.icon} {link.title}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="secondary" className="cursor-pointer active:scale-90">
          <a href="/">
            <h1 className="font-extrabold text-2xl text-orange-600 text-shadow-lg">Nowfal</h1>
          </a>
        </Button>
        <nav className="hidden md:flex gap-5 font-semibold">
          {navLinks.map(link => (
            <a key={link.title} href={link.link} className={navLinkStyles}>
              {link.icon} {link.title}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {author && <>
            <Button
              variant="secondary"
              size="icon"
              className="relative cursor-pointer active:scale-80"
              onClick={toggleShowViews}
            >
              <Badge variant="default" className="rounded-full absolute top-0 right-0 py-0 px-0.5 text-[10px] bg-orange-500 text-white">{views.length}</Badge>
              <Eye />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="relative cursor-pointer active:scale-80"
              onClick={toggleShowMessages}
            >
              <Badge variant="default" className="rounded-full absolute top-0 right-0 py-0 px-0.5 text-[10px] bg-orange-500 text-white">{messages.length}</Badge>
              <Bell />
            </Button>
          </>}
          <ThemeToggle />
        </div>
      </header>
      {showMessages && <MessageView
        messages={messages}
        toggleShowMessages={toggleShowMessages}
        setMessages={setMessages}
      />}
      {showViews && <ViewsCount 
        count={views.length}
        viewdAt={views}
        isVisible={showViews}
        onClose={toggleShowViews}
      />}
    </>
  );
}

export default Header;

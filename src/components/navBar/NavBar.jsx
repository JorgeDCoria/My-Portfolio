import { useState } from "react";
import Item from "./components/Item";
import {
  RiQuestionLine,
  RiListSettingsLine,
  RiFoldersLine,
  RiFileDownloadLine,
  RiContactsBookLine,
  RiMenuLine,
  RiCloseFill,
} from "react-icons/ri";
function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const items = [
    {
      title: "Sobre Mi",
      icon: <RiQuestionLine className="text-3xl" />,
      section: "#about",
    },
    {
      title: "Tecnologias",
      icon: <RiListSettingsLine className="text-3xl" />,
      section: "#technologies",
    },
    {
      title: "Proyectos",
      icon: <RiFoldersLine className="text-3xl" />,
      section: "#proyectos",
    },
    {
      title: "Descargar_Cv",
      icon: <RiFileDownloadLine className="text-3xl" />,
      section: "",
    },
    {
      title: "Contacto",
      icon: <RiContactsBookLine className="text-3xl" />,
      section: "",
    },
  ];

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div
      className={`fixed flex h-screen ${
        showMenu ? "left-0" : "-left-full"
      } z-50 w-72 flex-col items-center bg-primary_800 p-4 font-title font-semibold opacity-80 lg:left-0 lg:h-16 lg:w-full lg:flex-row lg:justify-between`}
    >
      <div className="mb-10 text-3xl text-white lg:mb-0">
        <a href="#header">My Portfolio</a>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row">
        {items.map((item, i) => (
          <Item key={i} title={item.title} section={item.section}>
            {item.icon}
          </Item>
        ))}
      </div>

      <button
        onClick={handleShowMenu}
        className={`${
          !showMenu
            ? " bg-primary_800 hover:bg-primary_700 "
            : " bg-red-500 hover:bg-red-400 "
        } fixed bottom-3 right-3 rounded-full p-1 text-3xl text-white transition-all lg:hidden`}
      >
        {!showMenu ? <RiMenuLine /> : <RiCloseFill />}
      </button>
    </div>
  );
}
export default NavBar;

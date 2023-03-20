import React from "react";
import Form from "./components/Form";
import git from "../../assets/github.png";
import whatsapp from "../../assets/whats-app.png";
import linkedin from "../../assets/linkedin.png";
import ContactSocial from "./components/ContactSocial";

const social = [
  {
    image: whatsapp,
    alt: "Whats-app image",
    url: "https://api.whatsapp.com/send?phone=3884611503",
  },
  { image: git, alt: "Git Hub", url: "https://github.com/JorgeDCoria" },
  {
    image: linkedin,
    alt: "linkedin",
    url: "https://www.linkedin.com/in/jorge-coria-9b6593246/",
  },
];
const Contact = () => {
  return (
    <div className="mb-24 grid w-full grid-cols-1 lg:grid-cols-2">
      <h1 className="mb-8 place-self-center font-title text-5xl font-bold text-primary_500 lg:col-span-2">
        Contactame
      </h1>
      <div className="flex h-full w-full justify-center ">
        <div className="grid h-full w-full grid-cols-3 place-content-center gap-4 rounded-xl bg-contactme bg-cover bg-center bg-no-repeat p-4 md:w-5/6">
          {social.map((e) => (
            <ContactSocial
              key={e.alt}
              image={e.image}
              url={e.url}
              alt={e.alt}
            />
          ))}
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Contact;

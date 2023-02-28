import React from "react";

const ContactSocial = ({ image, alt, url }) => {
  return (
    <div className="p-4 transition-all hover:scale-110">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={alt} />
      </a>
    </div>
  );
};

export default ContactSocial;

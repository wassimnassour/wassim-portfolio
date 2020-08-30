import React from "react";
import styled from "styled-components";

import {
  FaFacebookSquare,
  FaInstagram,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

export const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="icon" />,
    name: "Facebook",
    url: "https://www.facebook.com/wassimnassour",
    text: "wassimnassour",
  },
  {
    id: 2,
    icon: <FaInstagram className="icon" />,
    name: "Instagram",
    url: "https://www.instagram.com/wassimnassour",
  },

  {
    id: 4,
    icon: <FaGithub className="icon" />,
    name: "Github",

    url: "https://github.com/wassimnassour",
    text: "wassimnassour",
  },
  {
    id: 5,
    icon: <FaTwitter className="icon" />,
    name: "Twitter",
    url: "https://twitter.com/WassimNassour",
    text: "wassimnassour",
  },
];

//   id: 6,
//   icon: <FaFiPhone />,
//   name: "Twitter",

//   url: "www.facebook.com/wassimnassour",
// },
const SocialLink = styled.a`
  color: #eee;
  span {
    padding: 0.6rem 1rem;
    font-size: 1.3rem;
    font-weight: 500;
  }
`;

export const SocialLinks = data.map(link => (
  <SocialLink href={link.url} key={link.id}>
    <span>{link.name}</span>
  </SocialLink>
));

export const contactInfo = (
  <>
    {data.map(link => (
      <li key={link.id}>
        <a href={link.url}>{link.icon}</a>
      </li>
    ))}
  </>
);

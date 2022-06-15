import React from "react";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Container } from "../../util/container";
import { RawRenderer } from "./rawRenderer";
import { useTheme } from "..";
import { Icon } from "../../util/icon";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = ({ data, icon, rawData }) => {
  const theme = useTheme();
  const socialIconClasses = "h-7 w-auto";
  const socialIconColorClasses = {
    blue: "text-blue-500 dark:text-blue-400 hover:text-blue-300",
    teal: "text-teal-500 dark:text-teal-400 hover:text-teal-300",
    green: "text-green-500 dark:text-green-400 hover:text-green-300",
    red: "text-red-500 dark:text-red-400 hover:text-red-300",
    pink: "text-pink-500 dark:text-pink-400 hover:text-pink-300",
    purple: "text-purple-500 dark:text-purple-400 hover:text-purple-300",
    orange: "text-orange-500 dark:text-orange-400 hover:text-orange-300",
    yellow: "text-yellow-500 dark:text-yellow-400 hover:text-yellow-300",
    primary: "text-white opacity-80 hover:opacity-100",
  };

  const footerColor = {
    default:
      "text-gray-800 from-white to-gray-50 dark:from-gray-900 dark:to-gray-1000",
    primary: {
      blue: "text-white from-blue-500 to-blue-700",
      teal: "text-white from-teal-500 to-teal-600",
      green: "text-white from-green-500 to-green-600",
      red: "text-white from-red-500 to-red-600",
      pink: "text-white from-pink-500 to-pink-600",
      purple: "text-white from-purple-500 to-purple-600",
      orange: "text-white from-orange-500 to-orange-600",
      yellow: "text-white from-yellow-500 to-yellow-600",
    },
  };

  const footerColorCss =
    data.color === "primary"
      ? footerColor.primary[theme.color]
      : footerColor.default;

  return (
    <footer className={`bg-gradient-to-br ${footerColorCss}`}>
      <Container className="relative" size="small">
        <div className="flex justify-between items-center grid-cols-3 gap-6 flex-wrap">
          
          <div className="grid">
           <h1 className="text-xl md:text-7xl titleinfooter">Edie</h1>
            <Link href="/" passHref>
              <a className="group mx-2 flex items-center font-bold tracking-tight text-gray-400 dark:text-gray-300 opacity-50 hover:opacity-100 transition duration-150 ease-out whitespace-nowrap">

              {data.social && data.social.facebook && (
                <a
                  className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                  href={data.social.facebook}
                  target="_blank"
                >
                  <FacebookOutlinedIcon
                    className="footIcon"
                  />
                </a>
              )}
              {data.social && data.social.twitter && (
                <a
                  className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                  href={data.social.twitter}
                  target="_blank"
                >
                  <TwitterIcon
                    className={`${socialIconClasses} ${
                      socialIconColorClasses[
                        data.color === "primary" ? "primary" : theme.color
                      ]
                    }`}
                  />
                </a>
              )}
              {data.social && data.social.instagram && (
                <a
                  className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                  href={data.social.instagram}
                  target="_blank"
                >
                  <InstagramIcon
                    className={`${socialIconClasses} ${
                      socialIconColorClasses[
                        data.color === "primary" ? "primary" : theme.color
                      ]
                    }`}
                  />
                </a>
              )}
              {data.social && data.social.github && (
                <a
                  className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                  href={data.social.github}
                  target="_blank"
                >
                  <YouTubeIcon
                    className={`${socialIconClasses} ${
                      socialIconColorClasses[
                        data.color === "primary" ? "primary" : theme.color
                      ]
                    }`}
                  />
                </a>
              )}
              </a>
            </Link>
          </div>
            
            
        
        
          <div className="flex grid gap-4 listPageFooter">
          
            <h4 className="soustitlefooter">Menu</h4>
            <ul className="containSoustitlefooter">
              
                    <li className="">
                      <Link href="/" passHref>
                        <a className="">
                          Home
                        </a>
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/" passHref>
                        <a className="">
                          Project
                        </a>
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/" passHref>
                        <a className="">
                          Project
                        </a>
                      </Link>
                    </li>
                
            </ul>
          </div>

          <div className="flex grid gap-4 listAboutusFooter">
          
            <h4 className="soustitlefooter">ABOUT US</h4>
            <ul className="containSoustitlefooter">
              
                    <li className="">
                      <Link href="/" passHref>
                        <a className="">
                          Home
                        </a>
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/" passHref>
                        <a className="">
                          Project
                        </a>
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/" passHref>
                        <a className="">
                          Project
                        </a>
                      </Link>
                    </li>
                
            </ul>
          </div>
          <div className="flex grid gap-4 listAboutusFooter">
          
            <h4 className="soustitlefooter">Contact us</h4>
            <ul className="containSoustitlefooter">
              
                    <li className="">
                      <Link href="/" passHref>
                        <a className="">
                          Home
                        </a>
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/" passHref>
                        <a className="">
                          Project
                        </a>
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/" passHref>
                        <a className="">
                          Project
                        </a>
                      </Link>
                    </li>
                
            </ul>
          </div>
          <RawRenderer parentColor={data.color} rawData={rawData} />


        </div>
        
        <div
          className={`absolute h-1 bg-gradient-to-r from-transparent ${
            data.color === "primary" ? `via-white` : `via-black dark:via-white`
          } to-transparent top-0 left-4 right-4 opacity-5`}
        ></div>
        <div className="grid grid-cols-2">
          <div className="flex justify-start">
            <p>Design by kaeyros analitics</p>
          </div>
          <div className="flex justify-end">
            <p>copyright 2022 Edie ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

import React from "react";
import Link from "next/link";
import { Container } from "../util/container";
import { useTheme } from ".";
import { Icon } from "../util/icon";
import MenuIcon from '@mui/icons-material/Menu';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

export const Header = ({ data }) => {
  const theme = useTheme();

  const headerColor = {
    default:
      "text-black dark:text-white from-gray-50 to-white dark:from-gray-700 dark:to-gray-800",
    primary: {
      blue: "text-white from-blue-300 to-blue-500",
      teal: "text-white from-teal-400 to-teal-500",
      green: "text-white from-green-400 to-green-500",
      red: "text-white from-red-400 to-red-500",
      pink: "text-white from-pink-400 to-pink-500",
      purple: "text-white from-purple-400 to-purple-500",
      orange: "text-white from-orange-400 to-orange-500",
      yellow: "text-white from-yellow-400 to-yellow-500",
    },
  };

  const headerColorCss =
    data.color === "primary"
      ? headerColor.primary[theme.color]
      : headerColor.default;

  const activeItemClasses = {
    blue: "border-b-3 border-blue-200 dark:border-blue-700",
    teal: "border-b-3 border-teal-200 dark:border-teal-700",
    green: "border-b-3 border-green-200 dark:border-green-700",
    red: "border-b-3 border-red-300 dark:border-red-700",
    pink: "border-b-3 border-pink-200 dark:border-pink-700",
    purple: "border-b-3 border-purple-200 dark:border-purple-700",
    orange: "border-b-3 border-orange-200 dark:border-orange-700",
    yellow: "border-b-3 border-yellow-300 dark:border-yellow-600",
  };

  // If we're on an admin path, other links should also link to their admin paths
  const [prefix, setPrefix] = React.useState("");
  const [windowUrl, setUrl] = React.useState("");
  const isBrowser = typeof window !== "undefined";
  const hasUrl = isBrowser ? window.location.href : "";

  React.useEffect(() => {
    setUrl(hasUrl);
  }, [hasUrl]);

  React.useEffect(() => {
    if (window.location.pathname.startsWith("/admin")) {
      setPrefix("/admin");
    }
  });

  return (
    <div className={`bg-gradient-to-b footer-site ${headerColorCss}`}>
      <Container size="custom" className="py-0 relative z-10 max-w-8xl">
        <div className="flex items-start justify-between w-full">
          <h1 className="select-none pt-6 sm:pt-0 text-center sm:text-left text-xl md:text-7xl font-bold tracking-tight transition duration-150 ease-out transform">
            <Link href="/" passHref>
              <a className="flex titleEdie pt-0">
                {/* <Icon
                  parentColor={data.color}
                  data={{
                    name: data.icon.name,
                    color: data.icon.color,
                    style: data.icon.style,
                  }}
                  className="inline-block h-auto w-10 mr-1"
                /> */}{" "}
                Edie
              </a>
            </Link>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />

          </h1>
          <ul className="flex gap-6 sm:gap-2 lg:gap-6 font-bold text-sm text-center sm:text-rigth">
            {data.nav &&
              data.nav.map((item, i) => {
                const activeItem =
                  item.href === ""
                    ? typeof location !== "undefined" &&
                      location.pathname == "/"
                    : windowUrl.includes(item.href);
                return (
                  <li
                    key={`${item.label}-${i}`}
                    className="mr-0 sm:mr-3"
                    // className={activeItem ? activeItemClasses[theme.color] : ""}
                  >
                    <Link href={`${prefix}/${item.href}`} passHref>
                      <a className="select-none inline-block tracking-wide font-regular transition duration-150 ease-out opacity-70 hover:opacity-100 py-8">
                        {item.label}
                        {item.label==null &&<MenuSharpIcon
                          className="inline-block h-auto w-6"
                          />
                        }
                      </a>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
       {/*  <div
          className={`absolute h-1 bg-gradient-to-r from-transparent ${
            data.color === "primary" ? `via-white` : `via-black dark:via-white`
          } to-transparent bottom-0 left-4 right-4 -z-1 opacity-5`}
        /> */}
      </Container>
    </div>
  );
};

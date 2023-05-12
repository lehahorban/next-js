import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";

const navigation = [
  { id: 1, path: "/", title: "Home" },
  { id: 2, path: "/posts", title: "Posts" },
  { id: 3, path: "/contacts", title: "Contacts" },
];

const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <nav className={styles.navbar}>
      <Image src={"/logo.png"} alt="next" width={40} height={40} />
      <div className={styles.navLinkWrapp}>
        {navigation.map(({ id, path, title }) => (
          <Link
            className={pathname === path ? styles.active : styles.navLink}
            key={id}
            href={path}
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

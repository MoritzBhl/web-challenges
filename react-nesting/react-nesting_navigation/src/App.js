import "./styles.css";
import Header from "../src/components/Header.js";
import Navigation from "../src/components/Navigation.js";
import Link from "../src/components/Link";
import Logo from "../src/components/Logo.js";
import Avatar from "../src/components/Avatar.js";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}

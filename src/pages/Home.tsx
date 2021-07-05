import { Navbar } from "../components/Navbar";
import { About } from "../components/About";

export function Home() {
  return (
    <>
      <Navbar />
      <main>
        <About />
      </main>
    </>
  );
}

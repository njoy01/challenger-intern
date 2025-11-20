import { Book, ListTodo } from "lucide-react";
import { Logo } from "./components/Logo";
import { Events } from "./components/Events";
import { Locations } from "./components/Locations";
import Search from "./components/Search";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-4 my-4 grid gap-5">
      <div className="grid gap-3">
        <Logo />
      </div>

      <Search />

      <Events />
      <Locations />
    </main>
  );
}

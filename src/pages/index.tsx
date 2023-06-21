import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <main>
      <h1>Helllo</h1>
    </main>
  );
}

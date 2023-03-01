import Homebanner from "@/components/Homebanner";
import Homecategories from "@/components/Homecategories";

export default function Home() {
  return (
    <main>
      <div>
        <Homebanner />
        <Homecategories />
        <h1>Main Page</h1>
        <p>Get started!</p>{" "}
      </div>
    </main>
  );
}

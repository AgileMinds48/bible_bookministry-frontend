import Landing from "@/components/Home/Landing";
import PopularBooks from "@/components/Home/PopularBooks";
import Recommended from "@/components/Home/Recommended";
export default function Home() {
  return (
    <div>
      <Landing />
      <Recommended/>
      <PopularBooks/>
      </div>
  );
}

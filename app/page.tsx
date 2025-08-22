import Header from "@/components/Header";
import Landing from "@/components/Home/Landing";
import PopularBooks from "@/components/Home/PopularBooks";
import Recommended from "@/components/Home/Recommended";
import { ModalProvider } from "@/components/Modal/ModalContext";
export default function Home() {
  return (
    <div className="poppins">
    <ModalProvider >
      <Header/>
      <Landing />
      <Recommended/>
      <PopularBooks/>
      </ModalProvider>
      </div>
  );
}

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";
export default function Home() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <main className="flex w-full  h-[calc(100vh-56px)]">
        <Sidebar />
        <Content />
      </main>
    </div>
  );
}

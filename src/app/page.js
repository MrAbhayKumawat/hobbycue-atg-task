import Image from "next/image";
import styles from "./page.module.css";
import Header from '../common/Header'
import Main from "@/components/Main";
import Footer from "@/common/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer/>
    </>
  );
}

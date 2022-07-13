import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { prisma } from "../db/client";

export async function getServerSideProps() {
  const page = await prisma.page.findMany();
  return {
    props: {
      page: JSON.stringify(page),
    }, // will be passed to the page component as props
  };
}

const Home: NextPage = ({ page }: any) => {
  const pages = JSON.parse(page);
  return (
    <div>
      {pages.map((page: any) => {
        const { components, styles } = page;
        return (
          <div>
            <h2>Components</h2>
            <code>{JSON.stringify(components)}</code>
            <h2>Styles</h2>
            <code>{JSON.stringify(styles)}</code>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

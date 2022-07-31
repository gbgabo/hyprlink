import type { NextPage } from "next";
import { prisma } from "../db/client";
import Page from "../components/Page";

export const getServerSideProps = async () => {
  const page = await prisma.page.findMany();
  return {
    props: {
      page: JSON.stringify(page),
    }, // will be passed to the page component as props
  };
};

const Home: NextPage = ({ page }: any) => {
  const pages = JSON.parse(page);
  return (
    <div>
      {pages.map((page: any) => {
        return <Page page={page} />;
      })}
    </div>
  );
};

export default Home;

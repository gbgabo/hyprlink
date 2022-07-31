import type { GetServerSideProps, NextPage } from "next";
import Page from "../../components/Page";
import { getPage } from "../../lib/pages";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const username =
    typeof context.query.username! !== "string"
      ? context.query.username![0]
      : context.query.username!;

  const page = await getPage(username, username);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page: JSON.stringify(page),
    }, // will be passed to the page component as props
  };
};

const Home: NextPage = ({ page }: any) => {
  return <Page page={JSON.parse(page)} />;
};

export default Home;

import type { GetServerSideProps, NextPage } from "next";
import Page from "../../components/Page";
import { getPage } from "../../lib/pages";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const username =
    typeof query.username! !== "string" ? query.username![0] : query.username!;

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

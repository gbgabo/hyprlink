import type { GetServerSideProps, NextPage } from "next";
import Page from "../../../components/Page";
import { getPage } from "../../../lib/pages";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const username =
    typeof context.query.username! !== "string"
      ? context.query.username![0]
      : context.query.username!;

  const slug =
    typeof context.query.slug! !== "string"
      ? context.query.slug![0]
      : context.query.slug!;

  if (username === slug) {
    return {
      redirect: {
        destination: `/${username}`,
        permanent: false,
      },
    };
  }
  const page = await getPage(username, slug);

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

const Edit: NextPage = ({ page }: any) => {
  // Declare pageprovider
  return (
    <div>
      <h1>EDIT PAGE</h1>
      <Page page={JSON.parse(page)} />
    </div>
  );
};

export default Edit;

import type { GetServerSideProps, NextPage } from "next";
import Page from "../../../components/Page";
import { PageProvider, usePage } from "../../../context/Page";
import { getPage } from "../../../lib/pages";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const username =
    typeof query.username! !== "string" ? query.username![0] : query.username!;

  const slug = typeof query.slug! !== "string" ? query.slug![0] : query.slug!;

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

const EditWrapper = () => {
  const { title, components, styles } = usePage();
  const page = { title: title, components: components, styles: styles };
  return (
    <div>
      <h1>EDIT PAGE</h1>
      <Page page={page} />
    </div>
  );
};

const Edit: NextPage = ({ page }: any) => {
  return (
    <PageProvider>
      <EditWrapper />
    </PageProvider>
  );
};

export default Edit;

import type { GetServerSideProps, NextPage } from "next";
import Page from "../components/Page";

const Edit: NextPage = () => {
  // invoke provider hook
  return <Page page={page} />;
};

export default Edit;

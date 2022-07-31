import React from "react";

type Props = {
  page: Page;
};

const Page = ({ page }: Props) => {
  const { title, components, styles } = page;
  return (
    <div>
      <h1>{title}</h1>
      <h2>Components</h2>
      <code>{JSON.stringify(components)}</code>
      <h2>Styles</h2>
      <code>{JSON.stringify(styles)}</code>
    </div>
  );
};

export default Page;

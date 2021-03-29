const SlugPage = (props) => {
  return <div>{JSON.stringify(props, null, 2)}</div>;
};

export const getStaticProps = (ctx) => {
  return {
    props: ctx,
    notFound: true,
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default SlugPage;


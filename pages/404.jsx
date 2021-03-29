const ErrorPage = (props) => {
  return (
    <>
      <h1>ERROR!</h1>
      <div>{JSON.stringify(props, null, 2)}</div>
    </>
  );
};

export const getStaticProps = (ctx) => {
  return {
    props: ctx,
  };
};

export default ErrorPage;


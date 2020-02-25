import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>about me</h1>

      <style jsx>
        {`
          h1 {
            color: green;
            font-style: italic;
            text-transform: capitalize;
          }
        `}
      </style>
    </div>
  );
};

export default About;

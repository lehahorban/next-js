import Link from "next/link";
import Head from "next/head";
import Heading from "@/components/Heading";

export const getStaticProps = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    if (!data) {
      return { notFound: true };
    }
    return {
      props: { contacts: data },
    };
  } catch (error) {
    return {
      props: { contacts: null },
    };
  }
};

const Contact = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contact list" />
      <ul>
        {contacts &&
          contacts.map(({ id, name }) => (
            <li
              style={{
                display: "flex",
              }}
              key={id}
            >
              <Link href={`contacts/${id}`}>{name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Contact;

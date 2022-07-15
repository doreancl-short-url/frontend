import { Content } from "../components/content";
import { getSession, useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { Session } from "next-auth";

export default function Protected() {
  const { data: session, status } = useSession()
  if (session) {
    return (
      <>
        <Content>
          <p>This is protected content. You can access this content because you are signed in.</p>
        </Content>
      </>
    )
  }

  return (
    <>
      <Content>
        <p style={{ color: 'red' }}>You must be sign in to view the protected content on this page.</p>
      </Content>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{
  session: Session | null
}> = async (context) => {

  const seshion = await getSession(context);

  if (0) {
    const res = await fetch('/api/simple');
    const data = await res.json()

    console.log(data);
  }

  return {
    props: {
      session: seshion,
    },
  }
}
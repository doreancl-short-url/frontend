import { Content } from "../components/content";
import { color } from "chart.js/helpers";
import { useSession } from "next-auth/react";

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
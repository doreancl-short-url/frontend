import styles from "./nav.module.css"
import { signIn, signOut, useSession } from "next-auth/react";

export function NavAuth() {

  const { data: session, status } = useSession()
  const loading = status === 'loading'

  return <div className="relative">

    <p
      className={`nojs-show ${
        !session && loading ? styles.loading : styles.loaded
      }`}
    >
      {!session && (
        <>
              <span className={styles.notSignedInText}>
                You are not signed in
              </span>
          <a
            href={`/api/auth/signin`}
            className={styles.buttonPrimary}
            onClick={(e) => {
              e.preventDefault()
              signIn()
            }}
          >
            Sign in
          </a>
        </>
      )}
      {session?.user && (
        <>
              <span
                style={{ backgroundImage: `url(${session.user.image})` }}
                className={styles.avatar}
              />
          <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br/>
                <strong>{session.user.email || session.user.name}</strong>
              </span>
          <a
            href={`/api/auth/signout`}
            className={styles.button}
            onClick={(e) => {
              e.preventDefault()
              signOut()
            }}
          >
            Sign out
          </a>
        </>
      )}
    </p>

  </div>;
}
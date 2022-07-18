import Link from "next/link";
import { SignOut } from "./signOut";

// # En base al (TOKEN ? isLogged = true : isLogged = false)
// # Se habilita un tipo de menu u otro.

function UserLogged() {
  return (
    <>
      <Link href="/login">
        <a>Ingresar</a>
      </Link>
      <Link href="/profile">
        <a>Mi perfil</a>
      </Link>
      <Link href="/">
        <a>Buscar</a>
      </Link>
      <SignOut />
    </>
  );
}

function Default() {
  return (
    <>
      <Link href="/login">
        <a>Ingresar</a>
      </Link>
      <Link href="/">
        <a>Buscar</a>
      </Link>
    </>
  );
}

export default function MyMenu() {
  //   const token = useGetToken();
  //   const { full_name } = useGetUser();
  return <div>{"token" ? <UserLogged /> : <Default />}</div>;
}

import Link from "next/link";

const SignOut = () => {
  return (
    <div>
      <p>john.doe@gmail.com</p>
      <br />
      <Link href="/">
        <a>Cerrar sesión</a>
      </Link>
    </div>
  );
};

export { SignOut };

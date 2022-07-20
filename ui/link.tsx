import Link from "next/link";

const LinkCustom = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <Link href={href}>
      <a target="_blank">{children}</a>
    </Link>
  );
};

export { LinkCustom };

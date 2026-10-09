import Link from "next/link"

export default function Header({ titulo }) {
  return (
    <header>
      <Link href="/">
        <h1>{titulo}</h1>
      </Link>
    </header>
  );
}

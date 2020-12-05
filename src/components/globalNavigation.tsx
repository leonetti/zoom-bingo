/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

export default function globalNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/games">
            <a>Games</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

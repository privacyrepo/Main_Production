import Link from 'next/link'

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  return (
    <header>
      <nav>
        <ul role="list">
          <li>
            <Link href="/">
              <a>nav</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

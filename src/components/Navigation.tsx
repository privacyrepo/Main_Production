import Link from 'next/link'

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

import Link from 'next/link'
import main from "helpers/main"
import fallback from "helpers/fallback"

export default function Home() {
  return (
    <ul>
      <li>
        <p>{main}</p>
        <p>{fallback}</p>
        <Link href="/a" as="/a">
          <a>a</a>
        </Link>
      </li>
      <li>
        <Link href="/b" as="/b">
          <a>b</a>
        </Link>
      </li>
    </ul>
  )
}

import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <h2>Not Found</h2>
            <p>Ndekn arak ape2 cuy</p>
            <p>
                View <Link href="/blog">all posts</Link>
            </p>
        </div>
    )
}
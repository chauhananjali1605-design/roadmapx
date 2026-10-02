import { Link } from 'react-router-dom'
import { ArrowRightIcon, CompassIcon } from '../components/Icons.jsx'

export default function NotFound() {
  return (
    <div className="container-x flex min-h-[70vh] flex-col items-center justify-center text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-grad-primary text-white shadow-glow">
        <CompassIcon size={28} />
      </span>
      <h1 className="mt-6 font-display text-4xl font-bold">404</h1>
      <p className="mt-2 text-sm opacity-65">
        Looks like this path doesn't exist on the roadmap yet.
      </p>
      <Link to="/" className="btn-primary mt-6">
        Back to Home <ArrowRightIcon size={16} />
      </Link>
    </div>
  )
}

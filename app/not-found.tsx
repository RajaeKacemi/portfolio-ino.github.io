import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Sorry we couldn&#39;t find this page.
        </p>
        <Link
          href="/"
          className="text-primary p-2 border rounded-lg bg-primary text-secondary shadow-lg hover:bg-secondary hover:text-primary hover:duration-300"
        >
          Back to home page
        </Link>
      </div>
    </div>
  )
}
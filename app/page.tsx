import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/logo.jpeg"
          alt="Tea OSS Project logo"
          width={180}
          height={38}
          priority
        />

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            This open source project is part of the{" "}
            <a
              href="https://tea.xyz/oss"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Tea Protocol OSS ecosystem
            </a>.
          </li>
          <li className="mb-2">
            Contribute on GitHub at{" "}
            <a
              href="https://github.com/Wizbisy/teawizbisy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Wizbisy/teawizbisy
            </a>.
          </li>
          <li>Earn OSS rewards, grow your contributor graph, and build with Tea.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://tea.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Tea Protocol
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://github.com/Wizbisy/teawizbisy"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm">
        <a
          className="hover:underline"
          href="https://tea.xyz/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tea Docs
        </a>
        <a
          className="hover:underline"
          href="https://tea.xyz/oss"
          target="_blank"
          rel="noopener noreferrer"
        >
          OSS Directory
        </a>
        <a
          className="hover:underline"
          href="https://github.com/Wizbisy/teawizbisy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute →
        </a>
      </footer>
    </div>
  );
}

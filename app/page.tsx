"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-background text-foreground font-sans">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start animate-fade-in">
        <Image
          src="/logo.jpeg"
          alt="Tea OSS Project Logo"
          width={160}
          height={160}
          className="rounded-full shadow-lg transition-transform hover:scale-110"
          priority
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left bg-gradient-to-r from-emerald-500 to-lime-400 bg-clip-text text-transparent animate-typewriter">
          Welcome to teawizbisy – OSS brewed with Tea!
        </h1>

        <p className="text-sm sm:text-base text-center sm:text-left text-balance max-w-xl">
          This open-source project is proudly powered by the{" "}
          <a
            href="https://tea.xyz"
            className="underline text-emerald-600 hover:text-emerald-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tea Protocol
          </a>{" "}
          and maintained by{" "}
          <a
            href="https://github.com/Wizbisy"
            className="underline hover:text-gray-600 dark:hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Wizbisy
          </a>
          .
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            onClick={handleConfetti}
            className="rounded-full bg-emerald-500 text-white px-6 py-2 hover:bg-emerald-400 transition-all shadow-md"
          >
            Celebrate OSS!
          </button>
          <a
            href="https://github.com/Wizbisy/teawizbisy"
            className="rounded-full border border-gray-300 px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contribute on GitHub
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-muted-foreground">
        <a href="https://tea.xyz/oss" target="_blank" rel="noopener noreferrer">
          Tea OSS
        </a>
        <a
          href="https://github.com/Wizbisy/teawizbisy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repo
        </a>
        <a href="https://tea.xyz" target="_blank" rel="noopener noreferrer">
          Powered by Tea
        </a>
      </footer>

      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center">
          <p className="text-4xl animate-bounce text-emerald-400 font-bold">
            Confetti Time!
          </p>
        </div>
      )}
    </div>
  );

import Head from 'next/head';

export default function Layout({ children, title, description }) {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--clr-surface-a0)' }}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto">
        {children}
      </main>

      <footer className="mt-16 text-center text-sm" style={{ color: 'var(--clr-surface-a50)' }}>
        <p>© {new Date().getFullYear()} GetApp. All rights reserved.</p>
      </footer>
    </div>
  );
}

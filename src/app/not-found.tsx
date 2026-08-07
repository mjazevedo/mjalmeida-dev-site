import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-sm text-cyan">404</p>
      <h1 className="mt-4 max-w-xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Esta rota não existe neste sistema.
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-muted">
        O endereço pode ter mudado ou nunca existiu. Mas o restante da
        arquitetura está no lugar — volte para a página inicial.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-cyan hover:text-background"
      >
        Voltar ao início
      </Link>
    </main>
  );
}

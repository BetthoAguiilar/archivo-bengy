export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-lime-400">
          EL ARCHIVO BENGY
        </h1>

        <p className="mt-6 text-xl text-gray-300">
          Acceso autorizado
        </p>

        <button className="mt-10 rounded-xl bg-lime-400 px-8 py-4 text-xl font-bold text-black transition hover:scale-105">
          Entrar
        </button>
      </div>
    </main>
  );
}
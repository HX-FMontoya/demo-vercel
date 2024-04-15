export default function Home() {
  return (
    <div className="flex justify-center items-center bg-indigo-300 text-stone-700 p-8 m-16">
      <h1>
        Hola desde la demo de vercelllllll
      </h1>
      <p className="bg-slate-500 text-white rounded-xl p-2">{process.env.NEXT_PUBLIC_MAIL_EXAMPLE}</p>
    </div>
  );
}

// app/mixy/page.tsx
// Stránka /mixy – viacero mixov, každý má vlastný audio prehrávač

export default function MixyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      {/* Hlavný nadpis */}
      <h1 className="text-4xl font-bold mb-8">Moje Mixy</h1>

      {/* 1. MIX */}
      <section className="space-y-4 max-w-xl">
        <h2 className="text-2xl font-semibold">
          HanyWell – Genjutsu (DomaVPodkrovi)
        </h2>

        <audio
          controls
          className="w-full"
          src="/mixy/HanyWell - Genjutsu (DomaVPodkrovi).wav"
        >
          Tvoj prehliadač nepodporuje prehrávanie audia.
        </audio>

        <p className="text-gray-400 text-sm">
          Tento mix sa prehráva z priečinka public/mixy ako WAV súbor.
        </p>
      </section>

      {/* 2. MIX */}
      <section className="space-y-4 max-w-xl mt-10">
        <h2 className="text-2xl font-semibold">
          HanyWell - Genjutsu (Doma v Podkrovi) 02
        </h2>

        <audio
          controls
          className="w-full"
          src="/mixy/HanyWell - Genjutsu (Doma v Podkrovi) 02.wav"
        >
          Tvoj prehliadač nepodporuje prehrávanie audia.
        </audio>

        <p className="text-gray-400 text-sm">
          Druhý mix uložený v public/mixy.
        </p>
      </section>

      {/* 3. MIX */}
      <section className="space-y-4 max-w-xl mt-10">
        <h2 className="text-2xl font-semibold">
          HanyWell - Genjutsu (Doma v Podkrovi) 02
        </h2>

        <audio
          controls
          className="w-full"
          src="/mixy/HanyWell - Genjutsu (Doma v Podkrovi) 03.wav"
        >
          Tvoj prehliadač nepodporuje prehrávanie audia.
        </audio>

        <p className="text-gray-400 text-sm">
          Tretí mix, opäť z priečinka public/mixy.
        </p>
      </section>
    </main>
  );
}

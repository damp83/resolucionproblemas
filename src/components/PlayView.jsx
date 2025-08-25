import React from 'react';

export default function PlayView({ problems = [] }) {
  return (
    <section id="play-view" className="card p-6 bg-white/5 rounded mb-6">
      <h2 className="text-xl font-bold mb-2">Modo Juego</h2>
      <p className="mb-4">Aquí irá la interfaz de juego. En este scaffold mostramos un selector simple de problemas.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {problems.slice(0, 6).map(p => (
          <article key={p.id} className="p-3 bg-white/6 rounded">
            <h3 className="font-semibold">Grado {p.grade}</h3>
            <p className="text-sm mt-1">{p.question}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

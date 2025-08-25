import React from 'react';

export default function Header({ mode, toggleMode, onToggleAcc }) {
  return (
    <header className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <div className="font-bold text-lg">Aventura de Problemas</div>
        <div className="flex items-center gap-2 text-sm">
          <span>Modo Juego</span>
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" checked={mode === 'editor'} onChange={toggleMode} className="sr-only" />
            <div className="w-12 h-7 bg-gray-300 rounded-full"></div>
          </label>
          <span>Modo Editor</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="avatar-face text-2xl">🤖</div>
        <button className="px-3 py-1 rounded bg-white/10" onClick={onToggleAcc}>Accesibilidad</button>
      </div>
    </header>
  );
}

import React from 'react';

export default function AccessibilityPanel({ visible }) {
  if (!visible) return null;
  return (
    <div className="mb-4 p-4 bg-white/10 rounded text-gray-100">
      <h4 className="font-bold mb-2">Opciones de accesibilidad (placeholder)</h4>
      <div className="flex gap-3 items-center">
        <label className="flex items-center gap-2"><input type="checkbox" /> Alto contraste</label>
        <label className="flex items-center gap-2"><input type="checkbox" /> Texto grande</label>
      </div>
    </div>
  );
}

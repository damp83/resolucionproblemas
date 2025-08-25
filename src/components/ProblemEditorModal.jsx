import React from 'react';

export default function ProblemEditorModal({ visible, problem, onClose, onSave }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="card rounded-2xl shadow-2xl p-6 w-full max-w-2xl">
        <h3 className="font-bold mb-2">Editor de Problema (placeholder)</h3>
        <div className="mb-4">Aquí irá el formulario para crear/editar un problema.</div>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="py-2 px-3 rounded border">Cancelar</button>
          <button onClick={() => onSave && onSave(problem)} className="py-2 px-3 rounded bg-blue-600 text-white">Guardar</button>
        </div>
      </div>
    </div>
  );
}

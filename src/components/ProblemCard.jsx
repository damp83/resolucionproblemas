import React from 'react';

export default function ProblemCard({ problem, onEdit, onDelete }) {
  return (
    <li className="p-3 bg-white/6 rounded flex justify-between items-start">
      <div>
        <div className="font-semibold">{problem.question}</div>
        <div className="text-sm text-gray-200 mt-1">Tipo: {problem.type} — Respuesta: {problem.answer}</div>
      </div>
      <div className="flex flex-col gap-2">
        <button className="px-3 py-1 rounded bg-green-600 text-white text-sm" onClick={() => onEdit && onEdit(problem)}>Editar</button>
        <button className="px-3 py-1 rounded bg-red-600 text-white text-sm" onClick={() => onDelete && onDelete(problem)}>Eliminar</button>
      </div>
    </li>
  );
}

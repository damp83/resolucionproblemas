import React from 'react';
import ProblemCard from './ProblemCard';

export default function ProblemList({ problems = [], onEdit, onDelete }) {
  if (!problems.length) return <p className="text-sm">No hay problemas para este grado.</p>;
  return (
    <ul className="space-y-3">
      {problems.map(p => (
        <ProblemCard key={p.id} problem={p} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ul>
  );
}

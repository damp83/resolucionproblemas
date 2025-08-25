import React from 'react';
import ProblemList from './ProblemList';

export default function EditorView({ problems = [], gradeFilter, setGradeFilter, onAddProblem, onExportJSON, onEdit, onDelete }) {
  const filtered = gradeFilter && gradeFilter !== 'all' ? problems.filter(p => String(p.grade) === String(gradeFilter)) : problems;
  return (
    <section id="editor-view" className="card p-6 bg-white/5 rounded mb-6">
      <h2 className="text-xl font-bold mb-3">Mi Banco de Problemas</h2>
      <div className="flex items-center gap-4 mb-4">
        <label className="font-bold">Ver problemas de:</label>
        <select value={gradeFilter} onChange={e => setGradeFilter(e.target.value)} className="p-2 rounded text-black">
          <option value="1">1º</option>
          <option value="2">2º</option>
          <option value="3">3º</option>
          <option value="4">4º</option>
          <option value="5">5º</option>
          <option value="6">6º</option>
          <option value="all">Todos</option>
        </select>
      </div>

      <div id="problem-list-container" className="mb-4">
        <ProblemList problems={filtered} onEdit={onEdit} onDelete={onDelete} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <button onClick={onAddProblem} className="col-span-1 bg-green-600 px-4 py-2 rounded">Añadir Problema</button>
        <button className="col-span-1 bg-purple-600 px-4 py-2 rounded opacity-60 cursor-not-allowed" title="Generación IA desactivada">Generar con IA (off)</button>
        <div className="col-span-1">
          <select className="w-full p-2 rounded text-black">
            <option value="all">Exportar: Todos</option>
            <option value="1">Exportar: 1º</option>
            <option value="2">Exportar: 2º</option>
          </select>
          <button onClick={onExportJSON} className="w-full mt-2 bg-blue-600 px-4 py-2 rounded">Exportar JSON</button>
        </div>
        <div className="col-span-1">
          <button className="w-full bg-gray-700 px-4 py-2 rounded">Importar JSON</button>
        </div>
      </div>
    </section>
  );
}

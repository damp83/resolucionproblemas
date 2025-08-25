import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import AccessibilityPanel from './components/AccessibilityPanel';
import PlayView from './components/PlayView';
import EditorView from './components/EditorView';
import ProblemEditorModal from './components/ProblemEditorModal';
import { loadProblems, saveProblems } from './utils/storage';

export default function App() {
  // mode: 'play' or 'editor'
  const [mode, setMode] = useState('play');
  const [problems, setProblems] = useState([]);
  const [gradeFilter, setGradeFilter] = useState('1');
  const [showAccPanel, setShowAccPanel] = useState(false);
  const [toast, setToast] = useState(null);
  const [editorVisible, setEditorVisible] = useState(false);
  const [editingProblem, setEditingProblem] = useState(null);

  useEffect(() => {
    const loaded = loadProblems();
    setProblems(loaded);
  }, []);

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 4500);
      return () => clearTimeout(t);
    }
  }, [toast]);

  function toggleMode() {
    setMode(m => (m === 'play' ? 'editor' : 'play'));
  }

  function handleAddProblem() {
    const id = Math.random().toString(36).slice(2);
    const newP = { id, grade: Number(gradeFilter || 1), question: 'Nuevo problema editable', type: 'PPT', data: { p1: '0', p2: '0', t: '?' }, labels: { p1: 'P1', p2: 'P2', t: 'T' }, operation: '+', answer: '?' };
    const next = [newP, ...problems];
    setProblems(next);
    saveProblems(next);
    setToast('Problema añadido');
  }

  function handleExportJSON() {
    const payload = JSON.stringify(problems, null, 2);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(payload).then(() => setToast('JSON copiado al portapapeles'), () => setToast('No se pudo copiar'));
    } else {
      setToast('Exportar: copia manualmente desde la consola.');
      console.log(payload);
    }
  }

  function filteredProblems() {
    if (!gradeFilter || gradeFilter === 'all') return problems;
    return problems.filter(p => String(p.grade) === String(gradeFilter));
  }

  function handleEdit(problem) {
    setEditingProblem(problem);
    setEditorVisible(true);
  }

  function handleDelete(problem) {
    const ok = confirm('Eliminar problema seleccionado?');
    if (!ok) return;
    const next = problems.filter(p => p.id !== problem.id);
    setProblems(next);
    saveProblems(next);
    setToast('Problema eliminado');
  }

  function handleSaveEdited(problem) {
    const updated = problems.map(p => (p.id === problem.id ? problem : p));
    setProblems(updated);
    saveProblems(updated);
    setEditorVisible(false);
    setEditingProblem(null);
    setToast('Cambios guardados');
  }

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-indigo-600 to-blue-500 text-white flex items-start justify-center">
      <div className="w-full max-w-4xl">
        <Header mode={mode} toggleMode={toggleMode} onToggleAcc={() => setShowAccPanel(s => !s)} />

        <AccessibilityPanel visible={showAccPanel} />

        <main>
          {mode === 'play' ? (
            <PlayView problems={filteredProblems()} />
          ) : (
            <EditorView
              problems={problems}
              gradeFilter={gradeFilter}
              setGradeFilter={setGradeFilter}
              onAddProblem={handleAddProblem}
              onExportJSON={handleExportJSON}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </main>

        <footer className="text-center text-white/80 text-sm mt-6">
          <p className="font-semibold">Autor: Diego Alberto Moya Puerta</p>
        </footer>

        {toast && (
          <div className="fixed bottom-6 right-6 bg-black bg-opacity-60 text-white px-3 py-2 rounded">{toast}</div>
        )}

        <ProblemEditorModal visible={editorVisible} problem={editingProblem} onClose={() => setEditorVisible(false)} onSave={handleSaveEdited} />
      </div>
    </div>
  );
}

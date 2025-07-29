import React, { useState } from 'react';
import '../styles/layoutstyle/Notes.css';






const initialNotes = [
  {
    id: 1,
    topic: "Photosynthesis",
    subject: "Biology",
    class: "Form 2",
    date: "2025-06-01",
    type: "Written",
  },
  {
    id: 2,
    topic: "Algebra",
    subject: "Mathematics",
    class: "Form 1",
    date: "2025-05-29",
    type: "PDF",
  },
];

const Notes = () => {
  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("All Subjects");
  const [levelFilter, setLevelFilter] = useState("All Levels");
  const [notes, setNotes] = useState(initialNotes);

  const filteredNotes = notes.filter((note) => {
    const matchesSearch = note.topic.toLowerCase().includes(search.toLowerCase());
    const matchesSubject =
      subjectFilter === "All Subjects" || note.subject === subjectFilter;
    const matchesLevel =
      levelFilter === "All Levels" || note.class === levelFilter;
    return matchesSearch && matchesSubject && matchesLevel;
  });

  return (
    <div className="notes-dashboard">
      <h1 className="page-title">Lesson Notes</h1>

      <div className="notes-controls">
        <input
          type="text"
          className="search-input"
          placeholder="Search by topic..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="filters">
          <select
            className="filter-dropdown"
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
          >
            <option>All Subjects</option>
            <option>Mathematics</option>
            <option>Biology</option>
            <option>Geography</option>
          </select>

          <select
            className="filter-dropdown"
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
          >
            <option>All Levels</option>
            <option>Form 1</option>
            <option>Form 2</option>
            <option>Grade 6</option>
          </select>
        </div>

        <div className="action-buttons">
          <button className="btn write-note">✏️ Write New Note</button>
          <button className="btn upload-note">📄 Upload PDF</button>
        </div>
      </div>

      <table className="notes-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Topic</th>
            <th>Subject</th>
            <th>Class</th>
            <th>Date</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredNotes.map((note, index) => (
            <tr key={note.id}>
              <td>{index + 1}</td>
              <td>{note.topic}</td>
              <td>{note.subject}</td>
              <td>{note.class}</td>
              <td>{note.date}</td>
              <td>{note.type}</td>
              <td>
                <button className="btn small">View</button>
                {note.type === "Written" && (
                  <button className="btn small">Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Notes;

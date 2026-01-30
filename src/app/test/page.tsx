import { apiFetch } from "@/lib/api";

type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

export default async function NotesPage() {
  const res = await apiFetch("/api/notes");

  const notes: Note[] = await res.json();

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </li>
      ))}
    </ul>
  );
}

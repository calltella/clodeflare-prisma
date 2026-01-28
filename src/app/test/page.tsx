import { apiFetch } from "@/lib/api";

export default async function NotesPage() {
  const res = await apiFetch("/notes");
  const notes = await res.json();

  const notes: {
    id: string;
    title: string;
    content: string;
    createdAt: string;
  }[] = await res.json();

  return (
    <ul>
      {notes.map(note => (
        <li key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </li>
      ))}
    </ul>
  );
}


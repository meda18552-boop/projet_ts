import { Category } from "../enums/Category";
import { BookData } from "../interfaces/BookData";

export function parseBookData(raw: string): BookData {
  const data: unknown = JSON.parse(raw);

  if (typeof data !== "object" || data === null) {
    throw new Error("JSON invalide");
  }

  const candidate = data as Record<string, unknown>;

  if (typeof candidate.title !== "string" || typeof candidate.author !== "string") {
    throw new Error("Champs title/author manquants");
  }

  return {
    title: candidate.title,
    author: candidate.author,
    category: candidate.category as Category
  };
}
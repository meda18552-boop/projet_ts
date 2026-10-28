import { Category } from "../enums/Category";
import { ItemId } from "../types/ItemId";
import { LibraryItem } from "./LibraryItem";

export class Book extends LibraryItem {
  public constructor(
    id: ItemId,
    title: string,
    category: Category,
    private readonly author: string
  ) {
    super(id, title, category);
  }

  public override describe(): string {
    return `Livre : ${this.title} de ${this.author} (${this.category})`;
  }

  public override toString(): string {
    return `Book[${this.id}, ${this.title}]`;
  }
}
import { Category } from "../enums/Category";
import { ItemId } from "../types/ItemId";
import { LibraryItem } from "./LibraryItem";

export class Magazine extends LibraryItem {
  public constructor(
    id: ItemId,
    title: string,
    category: Category,
    private readonly issueNumber: number
  ) {
    super(id, title, category);
  }

  public override describe(): string {
    return `Magazine : ${this.title} n°${this.issueNumber} (${this.category})`;
  }
}
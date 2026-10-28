import { ItemId } from "../types/ItemId";
import { LibraryItem } from "../models/LibraryItem";

export class ItemRepository {
  private items: LibraryItem[] = [];

  public add(item: LibraryItem): void {
    this.items.push(item);
  }

  public findById(id: ItemId): LibraryItem | undefined {
    return this.items.find((item) => item.id === id);
  }

  public getAll(): readonly LibraryItem[] {
    return this.items;
  }
}
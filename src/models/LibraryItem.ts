import { Category } from "../enums/Category";
import { ItemStatus } from "../enums/ItemStatus";
import { Borrowable } from "../interfaces/Borrowable";
import { Describable } from "../interfaces/Describable";
import { ItemId } from "../types/ItemId";

export abstract class LibraryItem implements Borrowable, Describable {
  protected status: ItemStatus = ItemStatus.Available;

  public constructor(
    public readonly id: ItemId,
    protected readonly title: string,
    protected readonly category: Category
  ) {}

  public abstract describe(): string;

  public isAvailable(): boolean {
    return this.status === ItemStatus.Available;
  }

  public getStatus(): ItemStatus {
    return this.status;
  }

  public setStatus(status: ItemStatus): void {
    this.status = status;
  }

  public getTitle(): string {
    return this.title;
  }

  public toString(): string {
    return `[${this.id}] ${this.title}`;
  }
}
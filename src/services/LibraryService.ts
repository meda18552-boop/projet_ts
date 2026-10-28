import { ItemStatus } from "../enums/ItemStatus";
import { ItemRepository } from "../repositories/ItemRepository";
import { BorrowRecord } from "../types/BorrowRecord";
import { ItemId } from "../types/ItemId";
import { OperationResult } from "../types/OperationResult";

export class LibraryService {
  private readonly records: BorrowRecord[] = [];

  public constructor(private readonly repository: ItemRepository) {}

  public borrow(itemId: ItemId, memberName: string): OperationResult {
    const item = this.repository.findById(itemId);

    if (!item) {
      return ["error", `Document ${itemId} introuvable`];
    }
    if (!item.isAvailable()) {
      return ["error", `"${item.getTitle()}" est déjà emprunté`];
    }

    item.setStatus(ItemStatus.Borrowed);
    this.records.push({ itemId, memberName, createdAt: new Date() });
    return ["success", `"${item.getTitle()}" emprunté par ${memberName}`];
  }

  public giveBack(itemId: ItemId): OperationResult {
    const item = this.repository.findById(itemId);

    if (!item) {
      return ["error", `Document ${itemId} introuvable`];
    }

    item.setStatus(ItemStatus.Available);
    return ["success", `"${item.getTitle()}" retourné`];
  }
}
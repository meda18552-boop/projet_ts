import { ItemId } from "./ItemId";
import { Timestamped } from "./Timestamped";

export type BorrowRecord = {
  itemId: ItemId;
  memberName: string;
} & Timestamped;
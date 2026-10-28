import { ItemStatus } from "../enums/ItemStatus";
import { assertNever } from "./assertNever";

export function getStatusLabel(status: ItemStatus): string {
  switch (status) {
    case ItemStatus.Available:
      return "Disponible";
    case ItemStatus.Borrowed:
      return "Emprunté";
    case ItemStatus.Lost:
      return "Perdu";
    default:
      return assertNever(status);
  }
}
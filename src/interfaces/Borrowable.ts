import { Identifiable } from "./Identifiable";

export interface Borrowable extends Identifiable {
  isAvailable(): boolean;
}
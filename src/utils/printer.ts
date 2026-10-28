import { Formatter } from "../types/Formatter";

export function printLine(
  text: string,
  prefix: string = ">>",
  formatter?: Formatter
): void {
  const finalText = formatter ? formatter(text) : text;
  console.log(`${prefix} ${finalText}`);
}
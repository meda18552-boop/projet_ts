import { Category } from "./enums/Category";
import { Book } from "./models/Book";
import { Magazine } from "./models/Magazine";
import { ItemRepository } from "./repositories/ItemRepository";
import { LibraryService } from "./services/LibraryService";
import { getStatusLabel } from "./utils/statusLabel";
import { parseBookData } from "./utils/jsonParser";
import { printLine } from "./utils/printer";

const libraryName: string = "Bibliothèque EHEIM";
const categories: readonly Category[] = [Category.Fiction, Category.Technology];

const repository = new ItemRepository();
const service = new LibraryService(repository);

repository.add(new Book(1, "Clean Code", Category.Technology, "Robert C. Martin"));
repository.add(new Magazine(2, "Science & Vie", Category.Science, 1450));

const rawJson = '{"title":"TypeScript Handbook","author":"Microsoft","category":"Technology"}';
const data = parseBookData(rawJson);
repository.add(new Book(3, data.title, data.category, data.author));

printLine(libraryName, "##", (text) => text.toUpperCase());
printLine(`Catégories suivies : ${categories.join(", ")}`);

for (const item of repository.getAll()) {
  printLine(`${item.describe()} - ${getStatusLabel(item.getStatus())}`);
}

const [status1, message1] = service.borrow(1, "Sara");
printLine(`${status1} : ${message1}`);

const [status2, message2] = service.borrow(1, "Karim");
printLine(`${status2} : ${message2}`);

const [status3, message3] = service.giveBack(1);
printLine(`${status3} : ${message3}`);
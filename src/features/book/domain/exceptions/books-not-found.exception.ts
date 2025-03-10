export class BooksNotFoundException extends Error {
  constructor() {
    super("Books not found");
  }
}
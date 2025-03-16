export class InvalidTokenException extends Error {
  constructor() {
    super("Invalid or expired token");
  }
}

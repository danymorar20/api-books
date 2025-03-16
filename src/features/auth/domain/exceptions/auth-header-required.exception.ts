export class AuthHeaderRequired extends Error {
  constructor() {
    super("Authorization header is required");
  }
}

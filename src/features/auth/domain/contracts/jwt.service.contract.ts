export abstract class JwtServiceContract {
  abstract sign(payload: Record<string, unknown>): string;
  abstract verify<T extends Record<string, unknown>>(token: string): T;
}

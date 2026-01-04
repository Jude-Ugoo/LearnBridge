import { User } from '@prisma/client';

export type SanitizedUser = Omit<User, 'hash'>;

export function sanitizeUser(user: User): SanitizedUser {
  // remove the password hash before returning user data
  const { hash, ...rest } = user;
  return rest as SanitizedUser;
}

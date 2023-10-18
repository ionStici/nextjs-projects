import { hash, compare } from "bcryptjs";

export async function hashPassword(password) {
  const hashPassword = await hash(password, 12);
  return hashPassword;
}

export async function verifyPassword(password, hashedPassowrd) {
  const isValid = await compare(password, hashedPassowrd);
  return isValid;
}

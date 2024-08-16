import { z } from "zod";

export const minLengthErrorMessage = (type: string, number: number) =>
  `${type} must be at least ${number} characters long.`;

export const maxLengthErrorMessage = (type: string, number: number) =>
  `${type} cannot be longer than ${number} characters.`;

export const firstNameConstraints = () =>
  z
    .string()
    .trim()
    .min(3, { message: minLengthErrorMessage("First name", 3) })
    .max(32, { message: maxLengthErrorMessage("First name", 32) });

export const lastNameConstraints = () =>
  z
    .string()
    .trim()
    .min(3, { message: minLengthErrorMessage("Last name", 3) })
    .max(32, { message: maxLengthErrorMessage("Last name", 32) });

export const emailConstraints = () =>
  z
    .string()
    .trim()
    .email({ message: "Provide a valid email address." })
    .min(5, { message: minLengthErrorMessage("Email", 5) })
    .max(64, { message: maxLengthErrorMessage("Email", 64) });

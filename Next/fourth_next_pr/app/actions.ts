"use server";

import { z } from "zod";

const schema = z.object({
  fullName: z.string().trim().min(2, "Має бути щонайменше 2 символи"),
  email: z.email("Неправильно обрана пошта"),
  topic: z.enum(
    ["textbook", "reference-book", "fiction"],
    "Оберіть будь ласка тему",
  ),
  details: z.string().min(5, "Має бути щонайменше 5 символи"),
});

export type FormState = {
  success: boolean;
  message: string;
  errors: {
    fullName?: string[];
    email?: string[];
    topic?: string[];
    details?: string[];
  };
};

export async function submitRequest(_prev: FormState, formData: FormData) {
  const result = schema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    topic: formData.get("topic"),
    details: formData.get("details"),
  });

  if (!result.success) {
    return {
      success: false,
      message: "Виправте помилки у формі",
      errors: z.flattenError(result.error).fieldErrors,
    };
  }

  return { success: true, message: "Заявку на книгу перевірено!", errors: {} };
}
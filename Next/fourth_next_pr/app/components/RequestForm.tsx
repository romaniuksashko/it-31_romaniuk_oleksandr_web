"use client";

import { useActionState } from "react";
import "../globals.css"

import { submitRequest, type FormState } from "../actions";

const initialState: FormState = {
  success: false,
  message: "",
  errors: {},
};

export default function RequestForm() {
  const [state, formAction, isPending] = useActionState(
    submitRequest,
    initialState,
  );

  return (
    <form action={formAction} noValidate className="flex flex-col">
      <label htmlFor="fullName">Ім'я</label>
      <input
        id="fullName"
        name="fullName"
        className="border-solid border-black border-[2px] rounded-[10px] p-[5px]"
      />
      {state.errors.fullName && (
        <p className="text-red-600 font-bold">{state.errors.fullName[0]}</p>
      )}
      <label htmlFor="email">Введіть пошту:</label>
      <input
        type="email"
        id="email"
        name="email"
        className="border-solid border-black border-[2px] rounded-[10px] p-[5px]"
      />
      {state.errors.email && (
        <p className="text-red-600 font-bold">{state.errors.email[0]}</p>
      )}
      <label htmlFor="topic">Оберіть тему:</label>
      <select
        id="topic"
        name="topic"
        className="border-solid border-black border-[2px] rounded-[10px] p-[5px]"
      >
        <option value="not-chosen">Не вибрано</option>
        <option value="textbook">Підручник</option>
        <option value="reference-book">Довідник</option>
        <option value="fiction">Художня</option>
      </select>
      {state.errors.topic && (
        <p className="text-red-600 font-bold">{state.errors.topic[0]}</p>
      )}
      <label htmlFor="details">Введіть назву потрібної книги:</label>
      <textarea
        id="details"
        name="details"
        className="border-solid border-black border-[2px] rounded-[10px] p-[5px]"
      />
      {state.errors.details && (
        <p className="text-red-600 font-bold">{state.errors.details[0]}</p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="text-white text-semibold bg-blue-500"
      >
        {isPending ? "Надсилання..." : "Надіслати"}
      </button>
      {state.message.includes("Виправте") ? (
        <p aria-live="polite" className="text-red-600 font-bold">
          {state.message}
        </p>
      ) : (
        <p aria-live="polite" className="text-green-600 font-bold">
          {state.message}
        </p>
      )}
    </form>
  );
}

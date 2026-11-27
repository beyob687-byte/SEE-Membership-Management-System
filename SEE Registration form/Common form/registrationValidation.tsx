"use client";

import {
  createContext,
  useContext,
  type ReactNode,
} from "react";

export type RegistrationFieldErrors = Record<string, string>;

const RegistrationFieldErrorsContext =
  createContext<RegistrationFieldErrors>({});

export function RegistrationFieldErrorsProvider({
  errors,
  children,
}: {
  errors: RegistrationFieldErrors;
  children: ReactNode;
}) {
  return (
    <RegistrationFieldErrorsContext.Provider value={errors}>
      {children}
    </RegistrationFieldErrorsContext.Provider>
  );
}

export function useRegistrationFieldErrors() {
  return useContext(RegistrationFieldErrorsContext);
}

export function getRegistrationFieldAttributes(
  fieldName: string,
  error?: string
) {
  return {
    "aria-invalid": Boolean(error),
    "aria-describedby": error
      ? `registration-error-${fieldName}`
      : undefined,
    "data-validation-field": fieldName,
  };
}

export function RegistrationFieldError({
  fieldName,
  error,
}: {
  fieldName: string;
  error?: string;
}) {
  if (!error) {
    return null;
  }

  return (
    <p
      className="see-form-error"
      id={`registration-error-${fieldName}`}
    >
      {error}
    </p>
  );
}

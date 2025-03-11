import { AxiosError } from "axios";

export type AxiosBaseError = AxiosError<{
  error?: string;
  message?: string;
}>;

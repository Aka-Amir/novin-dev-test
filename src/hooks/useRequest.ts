import axios from "axios";
import { useState } from "react";
import { from } from "rxjs";
import { HttpResponse } from "../@types/models/httpResponse.mode-type";

export default function useRequest<T = Record<string, any>>(
  url: string,
  method: "post" | "get" | "put" | "delete"
) {
  const [loading, setLoading] = useState(false);
  const sendRequest = (
    body?: Record<string, any>,
    headers?: Record<string, any>
  ) => {
    setLoading(true);
    return from(
      axios
        .request<T>({
          method: method,
          url: url,
          headers: {
            "Content-Type": "application/json",
            ...(headers || {}),
          },
          data: body || {},
        })
        .then(
          (r): HttpResponse<T> => ({
            data: r.data,
            status: r.status,
          })
        )
        .finally(() => {
          setLoading(false);
        })
    );
  };

  return {
    send: sendRequest,
    loading,
  };
}

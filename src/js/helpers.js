import { TIMEOUT_SEC } from "./config.js";

export const timeout = sec => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Request took too long! Timeout after ${sec} second(s)`));
    }, sec * 1000);
  });
};

export const getJSON = async function (url) {
    try {

        // v‑1‑a. declaración de res
        const fetchPro = fetch(url);
        const resp = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);

        // v‑1‑b. declaración de data
        const data = await resp.json();

        // v‑1‑c. validación de res
        if (!resp.ok) throw new Error(`${data.message} (${resp.status})`);
        return data;
    } catch (err) {
        throw err;
    }
};
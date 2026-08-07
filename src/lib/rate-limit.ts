const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const requests = new Map<string, number[]>();

/**
 * In-memory fixed-window rate limiter. Adequado para uma única instância;
 * em múltiplas instâncias/serverless, troque por um store compartilhado
 * (ex.: Redis) ou pela proteção da plataforma de hospedagem.
 */
export function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const timestamps = (requests.get(key) ?? []).filter(
    (timestamp) => now - timestamp < WINDOW_MS,
  );

  if (timestamps.length >= MAX_REQUESTS) {
    requests.set(key, timestamps);
    return false;
  }

  timestamps.push(now);
  requests.set(key, timestamps);
  return true;
}

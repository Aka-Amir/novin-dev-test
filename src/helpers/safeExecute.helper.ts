export default function safeExecute<T>(
  action?: () => undefined | void | T
): T | undefined {
  if (!action) {
    return undefined;
  }
  return action() || undefined;
}

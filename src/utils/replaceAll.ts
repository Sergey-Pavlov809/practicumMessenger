export function replaceAll(input: string, search: string, replacement: string): string {
  return input.split(search).join(replacement);
}

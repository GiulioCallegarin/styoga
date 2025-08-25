import { promises as fs } from "fs";

export function shuffle<T>(array: T[]): void {
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    const tmp = array[currentIndex]!;
    array[currentIndex] = array[randomIndex]!;
    array[randomIndex] = tmp;
  }
}

export async function readJson<T>(filePath: string): Promise<T> {
  const file = await fs.readFile(filePath, "utf8");
  return JSON.parse(file) as T;
}

// Convenience helper to read from public/dynamic/content by filename
export async function readContentJson<T>(fileName: string): Promise<T> {
  const path = `${process.cwd()}/public/dynamic/content/${fileName}`;
  return readJson<T>(path);
}

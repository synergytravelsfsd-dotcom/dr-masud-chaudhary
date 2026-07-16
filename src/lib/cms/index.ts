/**
 * CMS client stubs — swap implementations when Supabase env is configured.
 */

export type ContentStatus = "draft" | "review" | "scheduled" | "published" | "archived";

export async function listPublished<T extends { status?: string }>(
  rows: T[]
): Promise<T[]> {
  return rows.filter((row) => !row.status || row.status === "published");
}

export function isCmsConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

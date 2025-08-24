// Utility functions to fetch write-up metadata and content from Notion
//
// This is only a minimal stub so the project compiles. Update it with real logic
// once you have a Notion database set up.

export interface WriteupMeta {
  slug: string
  title: string
  date?: string
}

/**
 * Fetch meta information (title, slug, date) for all write-ups.
 * Replace the implementation with actual Notion API calls when ready.
 */
export async function fetchWriteupMeta(): Promise<WriteupMeta[]> {
  // TODO: Replace with real fetch from Notion database
  return []
}

/**
 * Fetch the full recordMap for a single write-up by pageId.
 * The front-end `NotionPage` component can render this.
 */
export async function fetchWriteupRecordMap(pageId: string) {
  const res = await fetch(`https://notion-api.splitbee.io/v1/page/${pageId}`)
  if (!res.ok) {
    throw new Error(`Failed to fetch Notion page ${pageId}`)
  }
  return (await res.json()) as any
}

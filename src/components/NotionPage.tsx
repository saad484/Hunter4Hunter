import React, { useEffect, useState } from 'react'
import { NotionRenderer } from 'react-notion-x'
import 'react-notion-x/src/styles.css'
import '../styles/notion-custom.css'

interface Props {
  pageId: string
}

export default function NotionPage({ pageId }: Props) {
  const [recordMap, setRecordMap] = useState<any | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPage() {
      try {
        const res = await fetch(
          `https://notion-api.splitbee.io/v1/page/${pageId}`
        )
        if (!res.ok) throw new Error('Failed to fetch Notion content')
        const data = await res.json()
        setRecordMap(data)
      } catch (err: any) {
        setError(err.message)
      }
    }
    fetchPage()
  }, [pageId])

  if (error) {
    return <p className="text-destructive">Failed to load content: {error}</p>
  }
  if (!recordMap) {
    return <p className="text-muted-foreground">Loading write-ups...</p>
  }
  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={false}
      darkMode={false}
      disableHeader
    />
  )
}

import React from 'react'

interface StoreSwitcherProps  {
    items: Record<string, any>[];
  }

export default function StoreSwitcher({items}: StoreSwitcherProps) {
  return (
    <div>Number of stores: {items.length}</div>
  )
}
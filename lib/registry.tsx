'use client'

import { useServerInsertedHTML } from 'next/navigation'
import React, { useState } from 'react'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

/**
 * StyledComponentsRegistry is a component that manages the server-side rendering of styled-components.
 * It creates a ServerStyleSheet and uses it to collect styles from the child components.
 * The styles are then inserted into the server-rendered HTML.
 * On the client side, it simply renders the child components.
 *
 * @param children - The child components to render.
 */
export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  /**
   * styledComponentsStyleSheet is a ServerStyleSheet that collects styles from the child components.
   * It is created once with a lazy initial state.
   */
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  /**
   * useServerInsertedHTML is a custom hook from Next.js that inserts the collected styles into the server-rendered HTML.
   * After the styles are inserted, the stylesheet is cleared to prevent memory leaks.
   */
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  // On the client side, simply render the child components
  if (typeof window !== 'undefined') return <>{children}</>

  /**
   * On the server side, wrap the child components with a StyleSheetManager.
   * The StyleSheetManager uses the ServerStyleSheet to collect styles from the child components.
   */
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}

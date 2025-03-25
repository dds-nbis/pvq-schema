import { ReactNode, useState } from "react"

export type SectionProps = {
  showing: boolean
  children: ReactNode
}

export const Section = ({ showing, children }: SectionProps) => {
  return <div style={{ display: showing ? 'block' : 'none', overflow: 'scroll', width: '100%' }}>{children}</div>
}
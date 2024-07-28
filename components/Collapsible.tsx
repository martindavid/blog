'use client'

import React from 'react'
import * as RadixCollapsible from '@radix-ui/react-collapsible'
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons'

type CollapsibleProps = {
  name?: string
  children: React.ReactNode
  title: string
}

export const Collapsible: React.FC<CollapsibleProps> = ({ name, children, title }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <RadixCollapsible.Root open={open} onOpenChange={setOpen}>
      <div className="flex items-center justify-between">
        <h3>{title}</h3>
        <RadixCollapsible.Trigger asChild aria-labelledby={name}>
          <button className="IconButton">{open ? <Cross2Icon /> : <RowSpacingIcon />}</button>
        </RadixCollapsible.Trigger>
      </div>

      <RadixCollapsible.Content id={name}>{children}</RadixCollapsible.Content>
    </RadixCollapsible.Root>
  )
}

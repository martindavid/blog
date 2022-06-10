import React from 'react'

interface VideoProps {
  url: string
  posterUrl: string
  title?: string
}

export const Video: React.FC<VideoProps> = ({ url, posterUrl, title = '' }) => (
  <video width="100%" controls muted preload="none" poster={posterUrl}>
    <source src={url} type="video/mp4" />
  </video>
)

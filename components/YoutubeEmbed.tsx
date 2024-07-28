'use client'

interface Props {
  id: string
  width?: string
  height?: string
  title?: string
}

export const YoutubeEmbed = ({
  id,
  width = '560',
  height = '315',
  title = 'Youtube video player',
}: Props) => {
  return (
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${id}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

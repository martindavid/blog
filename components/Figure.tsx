interface Props {
  src: string
}

export const Figure = ({ src }: Props) => {
  return (
    <figure>
      <embed src={src}></embed>
    </figure>
  )
}

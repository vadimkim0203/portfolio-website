import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure className={"h-[148px] w-full flex overflow-hidden rounded-xl"}>
          <img src={src} alt={alt} className={"w-full h-full object-cover object-center"} />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
    Image: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure className="h-[480px] w-full flex flex-col items-center overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="max-h-[420px] max-w-full mx-auto block object-contain rounded-xl"
          />
          <figcaption className="text-center mt-2">
            {caption}
          </figcaption>
        </figure>
      )
    },
    Video: ({
  src,
  caption,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
}: {
  src: string
  caption?: string
  controls?: boolean
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
}) => {
  return (
    <figure className="w-full my-4 flex flex-col items-center">
      <video
        src={src}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        className="max-h-[480px] max-w-full mx-auto block rounded-xl object-contain"
      />
      {caption && <figcaption className="text-center mt-2 w-full">{caption}</figcaption>}
    </figure>
  )
},

  }
}

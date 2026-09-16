import Image from 'next/image'

export function Laptop({
  src,
  alt,
  priority = false,
}: {
  src: string
  alt: string
  priority?: boolean
}) {
  return (
    <div className="relative w-full">
      {/* screen */}
      <div
        className="relative mx-auto w-full overflow-hidden rounded-t-xl border-[6px] border-b-0"
        style={{
          borderColor: '#000000',
          aspectRatio: '16 / 10',
          boxShadow: '0 30px 80px -30px rgba(0,0,0,0.7)',
        }}
      >
        <Image
          src={src || '/placeholder.svg'}
          alt={alt}
          fill
          unoptimized
          sizes="(max-width: 768px) 90vw, 55vw"
          className="object-cover object-top"
          style={{ backgroundColor: '#000000' }}
          priority={priority}
        />
        {/* subtle glare */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(115deg, rgba(255,255,255,0.06) 0%, transparent 35%)',
          }}
        />
      </div>
      {/* base bar */}
      <div
        className="relative mx-auto h-3 w-full rounded-b-md"
        style={{ backgroundColor: '#000000' }}
      >
        <div
          className="absolute top-0 left-1/2 h-1.5 w-24 -translate-x-1/2 rounded-b-md"
          style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
        />
      </div>
      {/* bottom edge */}
      <div
        className="mx-auto h-1 w-[104%] -translate-x-[2%] rounded-b-xl"
        style={{ backgroundColor: '#111111' }}
      />
    </div>
  )
}

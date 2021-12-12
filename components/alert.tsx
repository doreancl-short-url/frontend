import cn from 'classnames'
import Container from "./container";

export default function Alert() {
  return (
    <div
      className={cn('border-b', 'bg-accent-1 border-accent-2'
      )}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {(
            <>
              The source code for this blog is{' '}
              <a
                href={`https://github.com/vercel/next.js/tree/canary/examples/`}
                className="underline hover:text-success duration-200 transition-colors"
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
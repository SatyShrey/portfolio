import projects from './projects'
import { useValues } from "./GlobalContexts"

export default function Works() {
  const { works,theme } = useValues();
  return (
    <section ref={works} className='max-w-5xl p-3 pt-13 m-auto '>
      <h1 className="text-center font-bold underline underline-offset-4 text-3xl text-primary">Works</h1>
      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        {projects.map((a, b) =>
          <div style={{boxShadow:`0 0 2px ${theme.color}`,backgroundColor:`${theme.color}10`}}
          className="w-full rounded-xl p-2 flex justify-center flex-wrap" key={b}>
            <iframe src={a.link} className="rounded-xl md:w-1/2" scrolling='no' />
            <div className="flex flex-col justify-center items-center gap-2 md:w-1/2">
              <h2 className="text-2xl font-semibold text-center">{a.name}</h2>
              <div className="flex items-center gap-2">
                <a href={a.link} className="btn btn-sm btn-primary">Open link</a>
                <a href={a.github} className="btn btn-sm btn-primary">Github</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

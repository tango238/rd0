import { useEffect, useState } from 'react'
import Viz from 'viz.js'
import { Module, render } from 'viz.js/full.render.js'

export function useRenderDiagram(dot: string) {
  const [diagram, updateDiagram] = useState("")
  useEffect(() => {
    const f = async () => {
      const viz = new Viz({ Module, render })
      const elem: string = await viz.renderString(dot)
      updateDiagram(elem)
    }
    f().catch(console.error)
  })

  return <div
    dangerouslySetInnerHTML={{
      __html: diagram,
    }}
  ></div>
}

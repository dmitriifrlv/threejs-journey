import Head from 'next/head'
import { SandboxPreview } from '../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../components/SEO/SEO'

const title = 'Shaders - Raging Sea'

export default function RagingSeaPage() {
  return (
    <>
      <SEO
        title={title}
        description="Raging Sea example from Three.js Journey course implemented with react-three-fiber"
        image="/thumbnails/shaders/raging-sea.png"
      />
      <SandboxPreview title={title} exampleDir="shaders/RagingSea" />
    </>
  )
}

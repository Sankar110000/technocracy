import { useParams } from 'next/navigation'
import React from 'react'

function page() {
    const {slug} = useParams()
  return (
    <div>page</div>
  )
}

export default page
import React from 'react'
import { useRouter } from 'next/router'

const Collection = () => {
  const router = useRouter()
  return (
    <div>
      <div>
        <h2>{router.query.collectionId}</h2>
      </div>
    </div>
  )
}

export default Collection

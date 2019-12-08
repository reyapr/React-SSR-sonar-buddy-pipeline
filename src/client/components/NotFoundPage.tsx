import React from 'react'

export default ({ staticContext = {} }: any) => {
  staticContext.notFound = true

  return (
    <div>404 Page Not Found</div>
  )
}
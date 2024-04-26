import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
export const ClientBreadCrumb = ({page}) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>      
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

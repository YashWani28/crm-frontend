import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
export const ClientBreadCrumb = ({page}) => {
  return (
    <Breadcrumb>
      <LinkContainer to="/login">
        <Breadcrumb.Item>Home</Breadcrumb.Item>      
      </LinkContainer>
        <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

import React from 'react'
import Layout from "../../components/layout";
import { WrapPageElementBrowserArgs } from 'gatsby';

const wrapPageElement: React.FC<WrapPageElementBrowserArgs> = ({ element }) => {
  return (
    <Layout>
      {element}
    </Layout>
  )
}

export default wrapPageElement;
import { Link } from 'gatsby';
import React from 'react';
import Layout from '../layouts/single';

const NotFoundPage = () => (
  <Layout>
    <article>
      <h1>404: Page not found.</h1>
      <p>
        You&apos;ve hit the void. <Link to="/">Go back.</Link>
      </p>
    </article>
  </Layout>
);

export default NotFoundPage;
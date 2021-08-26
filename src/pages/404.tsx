import { Link } from 'gatsby';
import React from 'react';

import { SingleLayout } from '../layouts/single';

const NotFoundPage = () => (
  <SingleLayout>
    <article>
      <h1>404: Page not found.</h1>
      <p>
        You&apos;ve hit the void. <Link to="/">Go back.</Link>
      </p>
    </article>
  </SingleLayout>
);

export default NotFoundPage;
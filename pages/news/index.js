//our-domain.com/news
import Link from "next/link"
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJS is a Great Framework
          </Link>
        </li>
        <li>Definitely want to build an app using React and Next</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;

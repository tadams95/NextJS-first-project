import { useRouter } from "next/router";

function DetailPage() {

    const router = useRouter();

    const newsId = router.query.newsId;

    //send a request to the backend api
    //fetch data

  return <h1>The Detail Page</h1>;
}

export default DetailPage;

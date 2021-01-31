import React, { useEffect, useState } from "react";
import history from "history/browser";
import { Button } from "@zimekk/components-2";

const getPage = (location: { hash: string }) => {
  const [path, hash = "/"] = decodeURI(location.hash).match(/^#(.+)/) || [];
  return hash;
};

export default () => {
  const [page, setPage] = useState(getPage(history.location));
  const [counter, setCounter] = useState(0);

  useEffect(() =>
    // location is an object like window.location
    history.listen(({ location, action, ...rest }) =>
      setPage(getPage(location))
    )
  );

  return (
    <section>
      <h1>Level</h1>
      <nav>
        <Button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            setCounter((counter) => counter + 1)
          }
        >
          {counter}
        </Button>
      </nav>
    </section>
  );
};

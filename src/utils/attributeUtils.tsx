export const shortenPgpOrReturnEmail = (url: string) => {
  if (url === "") return;

  const regex = new RegExp(
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  );

  // if the url provided is a link to the PGP key server, format away the base uri components
  if (url.match(regex)) {
    const lastIndex = url.lastIndexOf("/");
    return (
      <p key={url}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="italic !text-xs"
        >
          {url.slice(lastIndex + 1)}
        </a>
      </p>
    );
  }

  // if it doesn't match then it's an email
  return (
    <p key={url}>
      <a href={`mailto:${url}`} className="underline">
        {url}
      </a>
    </p>
  );
};

export const formatTwitterHandle = (handle: string) =>
  handle !== "" && (
    <p key={handle} className="text-blue-600">
      <a
        href={`https://twitter.com/${handle}`}
        target="_blank"
        rel="noopener noreferrer"
      >{`@${handle}`}</a>
    </p>
  );

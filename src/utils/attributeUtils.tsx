export const shortenPgpOrReturnEmail = (
  url: string,
  overrideStyle: boolean
) => {
  if (url === "") return;

  // regex for if the string is a url
  const regex = new RegExp(
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  );

  // if the url provided is a link to the PGP key server, format away the base uri components
  if (url.match(regex)) {
    const lastIndex = url.lastIndexOf("/");
    return (
      <p
        key={url}
        className={`text-inherit ${overrideStyle ? "" : "!text-xs italic"}`}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url.slice(lastIndex + 1)}
        </a>
      </p>
    );
  }

  // if it doesn't match then it's an email
  return (
    <p key={url} className="underline underline-offset-2 text-inherit">
      <a href={`mailto:${url}`}>{url}</a>
    </p>
  );
};

export const formatTwitterHandle = (handle: string) =>
  handle !== "" && (
    <p key={handle} className="text-inherit">
      <a
        href={`https://twitter.com/${handle}`}
        target="_blank"
        rel="noopener noreferrer"
      >{`@${handle}`}</a>
    </p>
  );

export const formatGithubHandle = (handle: string) => (
  <p key={handle} className="text-inherit">
    GH:{" "}
    <a
      href={`https://github.com/${handle}`}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-2 text-inherit"
    >
      {handle}
    </a>
  </p>
);

export const formatEnsAddress = (ens: string) => (
  <p key={ens} className="text-inherit">
    ENS:{" "}
    <a
      href={`https://app.ens.domains/name/${ens}/details`}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-2 text-inherit"
    >
      {ens}
    </a>
  </p>
);

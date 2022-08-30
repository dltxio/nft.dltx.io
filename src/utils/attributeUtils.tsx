export const shortenPGP = (url: string) => {
  if (url === "") return;

  const regex = new RegExp(
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  );

  if (url.match(regex)) {
    const lastIndex = url.lastIndexOf("/");
    return <p key={url}>{url.slice(lastIndex + 1)}</p>;
  }

  return <p key={url}>{url}</p>;
};

export const formatTwitterHandle = (handle: string) =>
  handle !== "" && <p key={handle}>{`@${handle}`}</p>;

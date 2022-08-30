export const shortenPGP = (url: string) => {
  if (url === "") return;

  const regex = new RegExp(
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  );

  if (url.match(regex)) {
    const lastIndex = url.lastIndexOf("/");
    return url.slice(lastIndex + 1);
  }

  return url;
};

export const formatTwitterHandle = (handle: string) =>
  handle !== "" && `@${handle}`;

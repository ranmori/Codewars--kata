


function generateHashtag(str) {
  if (str.trim().length === 0) return false;

  const hashtag = '#' + str
    .replace(/(?:^|\s)(\S)/g, (_, c) => c.toUpperCase())
    .replace(/\s+/g, '');

  return hashtag.length > 140 ? false : hashtag;
}

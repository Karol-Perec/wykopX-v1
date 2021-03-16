const validateEntries = (entries) => {
  return entries.map((e) => {
    return {
      id: e.id,
      author: e.author,
      blocked: e.blocked,
      body: e.body,
      commentsCount: e.comments_count,
      date: e.date,
      embed: e.embed,
      favourite: e.favourite,
      status: 'visible',
      userVote: e.user_vote,
      voteCount: e.vote_count,
      comments: e.comments?.map((c) => ({
        id: c.id,
        author: c.author,
        date: c.date,
        body: c.body,
        blocked: c.blocked,
        favourite: c.favourite,
        voteCount: c.vote_count,
        status: c.status,
        userVote: c.user_vote,
      })),
    };
  });
};

exports.validateEntries = validateEntries;

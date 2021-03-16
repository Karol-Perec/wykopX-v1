const validateLinks = (links) => {
  return links.map((l) => {
    return {
      id: l.id,
      title: l.title,
      description: l.description,
      sourceUrl: l.source_url,
      preview: l.preview,
      voteCount: l.vote_count,
      commentsCount: l.comments_count,
      date: l.date,
      plus18: l.plus18,
      isHot: l.is_hot,
    };
  });
};

exports.validateLinks = validateLinks;
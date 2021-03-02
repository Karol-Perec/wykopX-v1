const validateLinks = (links) => {
  return links.map((e) => {
    return {
      id: e.id,
      title: e.title,
      description: e.description,
      sourceUrl: e.source_url,
      preview: e.preview,
      voteCount: e.vote_count,
      commentsCount: e.comments_count,
      date: e.date,
      plus18: e.plus18,
      isHot: e.is_hot,
    };
  });
};

exports.validateLinks = validateLinks;
function normalizeRepos (repositories) {
  if (!Array.isArray(repositories)) return []
  return repositories?.map(repo => {
    return {
      id: Number.isFinite(repo?.id) ? repo.id : 0,
      name: typeof repo?.name === 'string' ? repo.name : '',
      url: typeof repo?.html_url === 'string' ? repo.html_url : '',
      description:
        typeof repo?.description === 'string' ? repo.description : '',
      language: typeof repo?.language === 'string' ? repo.language : '',
      stars: Number.isFinite(repo?.stargazers_count)
        ? repo.stargazers_count
        : 0,
      forks: Number.isFinite(repo?.forks_count) ? repo.forks_count : 0
    }
  })
}

export default normalizeRepos

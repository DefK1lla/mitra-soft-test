const postEndpoints = {
  posts: (page: number, limit: number) =>
    `/posts?_start=${page * limit}&_limit=${limit}`,
}

export default postEndpoints

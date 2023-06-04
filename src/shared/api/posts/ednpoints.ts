const postEndpoints = {
  posts: (page: number, limit: number) =>
    `?_start=${page * limit}&_limit=${limit}`,
}

export default postEndpoints

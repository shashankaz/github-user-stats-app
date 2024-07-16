import axios from "axios";

export const fetchGitHubUser = async ({ queryKey }) => {
  const [_, username] = queryKey;
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

export const fetchFollowers = async ({ queryKey }) => {
  const [_, username] = queryKey;
  const response = await axios.get(
    `https://api.github.com/users/${username}/followers`
  );
  return response.data;
};

export const fetchFollowing = async ({ queryKey }) => {
  const [_, username] = queryKey;
  const response = await axios.get(
    `https://api.github.com/users/${username}/following`
  );
  return response.data;
};

export const fetchRepos = async ({ queryKey }) => {
  const [_, username] = queryKey;
  const response = await axios.get(
    `https://api.github.com/users/${username}/repos`
  );
  return response.data;
};

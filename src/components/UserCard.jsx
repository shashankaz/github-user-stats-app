import React from "react";
import { calculateAccountAge } from "../utils/helpers";

const UserCard = ({
  userData,
  onShowFollowers,
  onShowFollowing,
  onShowRepos,
}) => (
  <div className="user-stats">
    <img src={userData.avatar_url} alt={`${userData.login} avatar`} />
    <h2>{userData.name || userData.login}</h2>
    <p>{userData.bio}</p>
    <ul>
      <li>
        <strong onClick={onShowRepos}>Public Repos:</strong>{" "}
        {userData.public_repos}
      </li>
      <li>
        <strong onClick={onShowFollowers}>Followers:</strong>{" "}
        {userData.followers}
      </li>
      <li>
        <strong onClick={onShowFollowing}>Following:</strong>{" "}
        {userData.following}
      </li>
      <li>
        <strong>Location:</strong> {userData.location || "Not available"}
      </li>
      <li>
        <strong>Blog:</strong>
        <a href={userData.blog} target="_blank" rel="noopener noreferrer">
          {" "}
          {userData.blog || "Not available"}
        </a>
      </li>
      <li>
        <strong>Account Age:</strong> {calculateAccountAge(userData.created_at)}{" "}
        years
      </li>
    </ul>
  </div>
);

export default UserCard;

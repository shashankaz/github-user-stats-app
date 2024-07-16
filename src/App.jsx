import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  fetchGitHubUser,
  fetchFollowers,
  fetchFollowing,
  fetchRepos,
} from "./utils/api";
import SearchForm from "./components/SearchForm";
import UserCard from "./components/UserCard";
import Modal from "./components/Modal";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalItems, setModalItems] = useState([]);

  const {
    data: userData,
    error: userError,
    isLoading: userLoading,
    refetch: refetchUser,
  } = useQuery({
    queryKey: ["githubUser", username],
    queryFn: fetchGitHubUser,
    enabled: false,
    retry: 1,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });

  const { data: reposData, refetch: refetchRepos } = useQuery({
    queryKey: ["repos", username],
    queryFn: fetchRepos,
    enabled: false,
    retry: 1,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (username) {
      refetchUser();
      refetchRepos();
    }
  };

  const handleShowFollowers = async () => {
    try {
      const followers = await fetchFollowers({
        queryKey: ["followers", username],
      });
      setModalTitle("Followers");
      setModalItems(followers);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching followers:", error);
    }
  };

  const handleShowFollowing = async () => {
    try {
      const following = await fetchFollowing({
        queryKey: ["following", username],
      });
      setModalTitle("Following");
      setModalItems(following);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching following:", error);
    }
  };

  const handleShowRepos = () => {
    setModalTitle("Repositories");
    setModalItems(reposData);
    setIsModalOpen(true);
  };

  const handleSelectRepo = (repo) => {
    window.open(repo.html_url, "_blank");
  };

  return (
    <div className="app">
      <h1>GitHub User Stats</h1>
      <SearchForm
        username={username}
        onInputChange={handleInputChange}
        onFormSubmit={handleFormSubmit}
      />
      {userLoading && <p>Loading...</p>}
      {userError && <p className="error">User not found</p>}
      {userData && (
        <UserCard
          userData={userData}
          onShowFollowers={handleShowFollowers}
          onShowFollowing={handleShowFollowing}
          onShowRepos={handleShowRepos}
        />
      )}
      {isModalOpen && (
        <Modal
          title={modalTitle}
          items={modalItems}
          onClose={() => setIsModalOpen(false)}
          onSelect={handleSelectRepo}
        />
      )}
    </div>
  );
};

export default App;

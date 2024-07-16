export const calculateAccountAge = (created_at) => {
  const createdAtDate = new Date(created_at);
  const currentDate = new Date();
  return currentDate.getFullYear() - createdAtDate.getFullYear();
};

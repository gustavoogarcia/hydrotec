export const logout = (refetch) => {
  localStorage.removeItem("currentUser");
  refetch();
};
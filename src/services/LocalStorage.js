 const createEntry = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

 const readEntry = (key) => {
  return localStorage.getItem(key)
};

 const updateEntry = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

 const deleteEntry = (key) => {
  localStorage.removeItem(key);
}

export { createEntry, readEntry, updateEntry, deleteEntry }
export const getUsers = async () => {
  const users = await Deno.readFile("./users.json");
  const decoder = new TextDecoder();
  const decodedData = decoder.decode(users);
  return decodedData;
};

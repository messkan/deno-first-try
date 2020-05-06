import { getUsers } from "./getUsers.ts";

export default async ({ response }: any) => {
  response.body = await getUsers();
};

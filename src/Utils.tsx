import { faker } from "@faker-js/faker";
import { User } from "./UserCard";

export const generateUsers = (count: number): User[] => {
  return Array.from(
    { length: count },
    (_): User => ({
      name: faker.person.fullName(),
      jobTitle: faker.person.jobTitle(),
      avatarSrc: faker.image.avatar(),
    })
  );
};

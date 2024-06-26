import { faker } from "@faker-js/faker/locale/ko";

export const lectures = [
  {
    id: faker.number.int(),
    courseId: faker.number.int(),
    lectureTitle: faker.string.sample(),
    url: "ys5niu4Sabg",
    order: 1,
    cid: 1,
    lid: 1,
  },
  {
    id: faker.number.int(),
    courseId: faker.number.int(),
    lectureTitle: faker.string.sample(),
    url: "y1b7jfIg_2w",
    order: 2,
    cid: 1,
    lid: 2,
  },
  {
    id: faker.number.int(),
    courseId: faker.number.int(),
    lectureTitle: faker.string.sample(),
    url: "yiaMOPVacPs",
    order: 3,
    cid: 1,
    lid: 3,
  },
];

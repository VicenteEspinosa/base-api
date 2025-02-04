import TestItem from "../models/testItem.model"
import { ObjectId } from "mongodb";

interface createParams {
  name: string;
}

interface Item {
  _id: ObjectId;
  name: string;
}

interface createResponse {
  item: Item;
}

module.exports = async function create({ name }: createParams): Promise<createResponse> {
  const testItem = await TestItem.create({ name });
  return {item: testItem };
};

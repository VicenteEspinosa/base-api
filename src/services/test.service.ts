import TestItem from "../models/testItem.model"

module.exports = async function list() {
  const testItems = await TestItem.find();
  return { items: testItems };
};

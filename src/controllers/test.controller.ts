const _ = require('lodash');
const listService = require('../services/test.service');

async function list(req, res) {
  const query = _.get(req, 'query', {});
  try {
    const { limit } = query;

    console.log('limit', limit);
    const { page } = await listService({ limit });

    return res.status(200).json(page);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

export default list;

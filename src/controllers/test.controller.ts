const _ = require('lodash');
const listService = require('../services/test.service');
import { Request, Response } from 'express';

interface Query {
  limit?: number;
}

interface ListServiceResponse {
  page: any;
}

async function list(req: Request, res: Response): Promise<Response> {
  const query: Query = _.get(req, 'query', {});
  try {
    const { limit } = query;

    console.log('limit', limit);
    const { page }: ListServiceResponse = await listService({ limit });

    return res.status(200).json(page);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

export default list;

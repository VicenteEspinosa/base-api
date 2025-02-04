const _ = require('lodash');
const createService = require('../services/testCreate.service');
import { Request, Response } from 'express';

interface Body {
  name: string;
}

interface CreateServiceResponse {
  item: any;
}

async function create(req: Request, res: Response): Promise<Response> {
  const body: Body = _.get(req, 'body', {});
  try {
    const { name } = body;

    const { item }: CreateServiceResponse = await createService({ name });

    return res.status(200).json(item);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

export default create;

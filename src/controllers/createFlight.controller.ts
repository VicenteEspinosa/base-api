const _ = require('lodash');
const createFlightService = require('../services/createFlight.service');
import { Request, Response } from 'express';

async function create(req: Request, res: Response): Promise<Response> {
  const body: Body = _.get(req, 'body', {});
  try {
    const { capacity, flightCode, passangers }: any = body;

    const { flight }: any = await createFlightService({ capacity, flightCode, passangers });

    return res.status(200).json(flight);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

export default create;

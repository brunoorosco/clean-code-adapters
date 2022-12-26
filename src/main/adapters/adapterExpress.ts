// import { Controller, HttpRequest } from '../../presentation/protocols'
import { Request, Response } from 'express'

export interface HttpResponse {
  statusCode: number
  body: any
}

export interface HttpRequest {
  body?: any
  headers?: any
  params?: any
  query?: any
}

export interface Controller {
  httpRequest: HttpRequest
}

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers
    }

    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { ConvertController } from './convert.controller';
import {ConvertService} from "./convert.service";
import * as request from 'supertest';
import {INestApplication, HttpService, HttpModule} from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { of } from 'rxjs';
import {AppModule} from "../app.module";


describe('ConvertController', () => {
  let controller: ConvertController;
  let app: INestApplication;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule, HttpModule],
      controllers: [ConvertController],
      providers: [ConvertService],
    }).compile();

    app = module.createNestApplication();
    controller = module.get<ConvertController>(ConvertController);
    httpService = module.get<HttpService>(HttpService);
    await app.init();
  });

  it('test de date incorrect', async () => {
    const result: AxiosResponse = {
      data: {},
      status: 404,
      statusText: 'Paramètre incorrecte',
      headers: {},
      config: {},
    };

    jest.spyOn(httpService, 'get').mockImplementationOnce(() => of(result));

    return request(app.getHttpServer())
      .get('/convert/23//2020')
      .expect(404);
  });

  it('test de date correct', async () => {
    const result: AxiosResponse = {
      data: {
        dateAR :'23/03/2020',
        dateRo: 'XXIII/III/MMXX'},
      status: 200,
      statusText: 'Convertion correcte',
      headers: {},
      config: {},
    };
    jest.spyOn(httpService, 'get').mockImplementationOnce(() => of(result));
    const response = await request(app.getHttpServer())
      .get('/convert/23/03/2020')
      .expect(200);
    expect(response.text).toBe('XXIII/III/MMXX');
  });
});

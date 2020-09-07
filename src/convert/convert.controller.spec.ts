import { Test, TestingModule } from '@nestjs/testing';
import { ConvertController } from './convert.controller';
import {ConvertService} from "./convert.service";
import * as request from 'supertest';
import { INestApplication, HttpService,HttpModule } from '@nestjs/common';






describe('ConvertController', () => {
  let controller: ConvertController;
  let app: INestApplication;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConvertController],
      providers: [ConvertService],
    }).compile();

    controller = module.get<ConvertController>(ConvertController);

  });
  function convert(param) {
    const options = {
      'method': 'GET',
      'url': 'http://localhost:3000/convert/' + param,
    };


  }

  test('Paramètre incorrecte', async () => {
    expect(await convert('non valide')).toBe(422);
  });

  test('Convertion correcte', async () => {
    expect(await convert(1133)).toBe('MCXXXIII');
  });

});

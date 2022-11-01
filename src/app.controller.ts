import { Controller, Get, Res } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor () {}

  @ApiExcludeEndpoint()
  @Get()
  async redirect(@Res() resposta: any) {
    return resposta.redirect('/swagger');
     
  }
}





// import { AppService } from './app.service';

//@Controller()
// export class AppController {
  // constructor(private readonly appService: AppService) {}

  // @Get('/hello')
  //getHello(): string {
   // return this.appService.getHello();
  //}
  // @Get('/BSM')
  // getBSM(): string {
    // return this.appService.getBSM();
  // }

  // @Get('/aprender')
  // getAprendizagem():string {
    // return this.appService.getAprendizagem();
  // }
// }

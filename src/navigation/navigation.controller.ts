import { Controller, Get } from '@nestjs/common';
const navigationData = require("../../temp-data/navigation.json");

@Controller('navigation')
export class NavigationController {
@Get('main-navigation')
getAll(){
    return navigationData;
}
}

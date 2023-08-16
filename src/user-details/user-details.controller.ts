/* eslint-disable prettier/prettier */
import { Controller, Body, Get, Post } from '@nestjs/common';
import { UserDetailsService } from './user-details.service';
import { CreateUserDetailsDto } from './dto';

@Controller('api/userdetails/')
export class UserDetailsController {
    constructor(private readonly userDetailsService:UserDetailsService) {}

    @Get()
    getUserDetails() {
        return this.userDetailsService.getUserDetails()
    }
    @Get(':id')
    getUserDetailsByUserId(id: number) {
        return this.userDetailsService.getUserDetailsByUserId(id)
    }

    @Post()
    createUserDetails(@Body() dto: CreateUserDetailsDto) {
        return this.userDetailsService.createUserDetails(dto)
    }
}

import { Injectable } from '@nestjs/common'
import { CreateUserDetailsDto } from './dto'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class UserDetailsService {
	constructor(private prisma: PrismaService) {}

	getUserDetails() {
		return this.prisma.userDetails.findMany()
	}
	getUserDetailsByUserId(id: number) {
		return this.prisma.userDetails.findFirst({
			where: { id: id },
		})
	}

	async createUserDetails(dto: CreateUserDetailsDto) {
		console.log(dto)
		const userDetails = await this.prisma.userDetails.create({
			data: { ...dto },
		})
		return userDetails
	}
}

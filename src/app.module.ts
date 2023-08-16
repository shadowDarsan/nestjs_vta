import { Module } from '@nestjs/common'
import { UserDetailsModule } from './user-details/user-details.module'
import { PrismaModule } from './prisma/prisma.module'
import { ConfigModule } from '@nestjs/config'

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		UserDetailsModule,
		PrismaModule,
	],
})
export class AppModule {}

import { IsDate, IsDateString, IsNotEmpty, IsString } from 'class-validator'

export class CreateUserDetailsDto {
	@IsString()
	@IsNotEmpty()
	name: string

	@IsString()
	@IsNotEmpty()
	email: string

	@IsString()
	@IsNotEmpty()
	gender: string

	@IsString()
	@IsNotEmpty()
	phone: string

	@IsString()
	@IsNotEmpty()
	address: string

	@IsString()
	@IsNotEmpty()
	nationality: string

	@IsDateString()
	dateOfBirth: Date

	@IsString()
	@IsNotEmpty()
	education: string

	@IsString()
	@IsNotEmpty()
	preferedModeOfContact: string
}

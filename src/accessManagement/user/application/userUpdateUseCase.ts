import { UserRepository } from '../domain/repositories/UserRepository';
import { User } from '../domain/entities/user';
import { UserValidate } from '../domain/validators/userValidate';

export class UserUpdateUseCase {

    constructor(private readonly userRepository: UserRepository) {}

    async execute(id: number, email: String, password: String, verified: Date, idRole: Number): Promise<User | null> {
        try {
                const update = await this.userRepository.updateUser(id, email, password, verified, idRole)
                return update;

        
    } catch(erro){
        return null;
    }
}
}

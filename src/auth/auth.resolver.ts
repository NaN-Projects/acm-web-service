import {Args, Context, Mutation, Resolver} from '@nestjs/graphql';
import {UserService} from "../users/user.service";
import {LoginResponse, LoginUser} from "../users/dto/login-user";
import {UserDto} from "../users/dto/user.dto";
import {UserInput} from "../users/input/user.input";
import {User} from "../users/entity/user.entity";
import {AuthService} from "./auth.service";
import {IAuthResponse} from "./interfaces/auth";
import {CurrentUser} from "../shared/utils/decorator/user.decorator";
import {UseGuards} from "@nestjs/common";
import {GraphqlAuthGuard} from "./graphql-auth.guard";

@Resolver()
export class AuthResolver {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService,
    ) {
    }

    @Mutation(() => LoginResponse)
    async login(@Args('input') input: LoginUser): Promise<IAuthResponse> {
        return this.authService.login(input);
    }

    @Mutation(() => LoginResponse)
    async refreshToken(@Args('refreshToken') refreshToken: string): Promise<IAuthResponse> {
        return this.authService.refresh({refreshToken});
    }

    @Mutation(() => UserDto)
    async signUp(@Args('data') data: UserInput, @Context('req') req: any): Promise<User> {
        return this.authService.signup(data, req);
    }

    @Mutation(() => Boolean)
    async logout(@Args('refreshToken')refreshToken: string): Promise<boolean> {
        await this.authService.delete({refreshToken});
        return true;
    }

    @UseGuards(GraphqlAuthGuard)
    @Mutation(() => Boolean)
    async changePassword(@Args('password') password: string, @CurrentUser() user: UserDto){
        try{
            return this.authService.changePassword(user.id as number, password);
        }catch (e) {
            return e;
        }
    }
}

import { GoogleStrategy } from './strategies/google.strategy';
import { ConfigService } from '@nestjs/config';
import { User } from './../models/user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './service/auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { MailerModule } from '@nestjs-modules/mailer';

const configService: ConfigService = new ConfigService()

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: configService.get<string>('JWT_SECRET_KEY'),
      signOptions: {
        expiresIn: '10800s'
      }
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.office365.com',
        secure: false,
        auth: {
          user: 'yimnai.dev@outlook.com',
          pass: '.Kvrag7C2yFinOL',
        },
      },
      defaults: {
        from: '"No Reply" <yimnai.dev@outlook.com>',
      }
    }),
  ],
  controllers: [UserController],
  providers: [UserService, AuthService, LocalStrategy, JwtStrategy, GoogleStrategy, ConfigService]
})
export class UserModule {}

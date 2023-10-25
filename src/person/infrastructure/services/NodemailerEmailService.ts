import nodemailer from 'nodemailer';
import { EmailService } from '../../domain/EmailService';
import * as dotenv from "dotenv";
dotenv.config();
export class NodemailerEmailService implements EmailService {
  private transporter: nodemailer.Transporter;
 
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail', // Puedes configurar esto según tus necesidades
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS_EMAIL,
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string): Promise<void> {
    const mailOptions = {
      from: process.env.EMAIL,
      to,
      subject,
      html: '<h1>Correo de confirmación</h1><h2><A HREF="http://localhost:3000/api/v1/validate/:id_user"> Confirmar </A></h2>',
    };

    await this.transporter.sendMail(mailOptions);
  }
}
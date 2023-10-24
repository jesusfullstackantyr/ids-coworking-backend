import nodemailer from 'nodemailer';
import { EmailService } from '../../domain/EmailService';

export class NodemailerEmailService implements EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail', // Puedes configurar esto según tus necesidades
      auth: {
        user: 'tucorreo@gmail.com',
        pass: 'tucontraseña',
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string): Promise<void> {
    const mailOptions = {
      from: 'tucorreo@gmail.com',
      to,
      subject,
      html: '<h1>Correo de confirmación</h1><h2><A HREF="http://localhost:3000/api/v1/"> Confirmar </A></h2>',
    };

    await this.transporter.sendMail(mailOptions);
  }
}
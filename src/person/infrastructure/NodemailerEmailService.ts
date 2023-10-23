import nodemailer from 'nodemailer';
import { EmailService } from '../domain/EmailService';

export class NodemailerEmailService implements EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail', // Puedes configurar esto según tus necesidades
      auth: {
        user: '203467@ids.upchiapas.edu.mx',
        pass: 'tolucafc1988',
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string): Promise<void> {
    const mailOptions = {
      from: '203467@ids.upchiapas.edu.mx',
      to,
      subject,
      html: '<h1>Correo de confirmación</h1><h2><A HREF="http://localhost:3000/api/v1/"> Confirmar </A></h2>',
    };

    await this.transporter.sendMail(mailOptions);
  }
}
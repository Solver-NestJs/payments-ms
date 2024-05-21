import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentSessionDto } from './dto/payment-session.dto';
import { Request, Response } from 'express';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-payment-session')
  createPaymentSession(@Body() paymenSessionDto: PaymentSessionDto) {
    return this.paymentsService.createPaymentSession(paymenSessionDto);
  }

  @Get('success')
  successPayment() {
    return 'Payment successful!';
  }

  @Get('cancel')
  cancelPayment() {
    return 'Payment Cancelled!';
  }

  @Post('webhook')
  webhook(@Req() req: Request, @Res() res: Response) {
    return this.paymentsService.stripeWebHook(req, res);
  }
}

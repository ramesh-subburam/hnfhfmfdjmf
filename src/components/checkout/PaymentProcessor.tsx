import React, { useState } from 'react';
import PaymentMethodSelector from './PaymentMethodSelector';
import CreditCardForm from './CreditCardForm';
import BankTransferForm from './BankTransferForm';
import type { PaymentMethod, PaymentDetails } from '../../types/Payment';

interface PaymentProcessorProps {
  amount: number;
  isWholesale: boolean;
  onPaymentComplete: (details: PaymentDetails) => void;
}

export default function PaymentProcessor({ 
  amount, 
  isWholesale, 
  onPaymentComplete 
}: PaymentProcessorProps) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit-card');

  const handlePayment = (details: any) => {
    onPaymentComplete({
      method: paymentMethod,
      amount,
      currency: 'INR',
      isWholesale,
      ...details
    });
  };

  return (
    <div className="space-y-8">
      <PaymentMethodSelector
        selected={paymentMethod}
        isWholesale={isWholesale}
        onSelect={setPaymentMethod}
      />

      <div className="mt-6">
        {paymentMethod === 'credit-card' && (
          <CreditCardForm onSubmit={handlePayment} />
        )}
        {paymentMethod === 'bank-transfer' && (
          <BankTransferForm onSubmit={handlePayment} />
        )}
        {(paymentMethod === 'paytm' || paymentMethod === 'google-pay') && (
          <div className="text-center p-4">
            <p className="text-lg font-medium">Scan QR Code to Pay</p>
            <div className="mt-4 p-8 border-2 border-dashed border-gray-300 rounded-lg">
              QR Code Placeholder
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
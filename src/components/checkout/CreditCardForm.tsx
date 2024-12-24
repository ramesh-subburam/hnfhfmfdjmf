import React, { useState } from 'react';
import type { CreditCardInfo } from '../../types/Payment';

interface CreditCardFormProps {
  onSubmit: (cardInfo: CreditCardInfo) => void;
}

export default function CreditCardForm({ onSubmit }: CreditCardFormProps) {
  const [cardInfo, setCardInfo] = useState<CreditCardInfo>({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(cardInfo);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Card Number</label>
        <input
          type="text"
          maxLength={16}
          placeholder="1234 5678 9012 3456"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          value={cardInfo.number}
          onChange={(e) => setCardInfo({ ...cardInfo, number: e.target.value })}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
          <input
            type="text"
            placeholder="MM/YY"
            maxLength={5}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            value={cardInfo.expiry}
            onChange={(e) => setCardInfo({ ...cardInfo, expiry: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">CVV</label>
          <input
            type="text"
            placeholder="123"
            maxLength={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            value={cardInfo.cvv}
            onChange={(e) => setCardInfo({ ...cardInfo, cvv: e.target.value })}
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Cardholder Name</label>
        <input
          type="text"
          placeholder="John Doe"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          value={cardInfo.name}
          onChange={(e) => setCardInfo({ ...cardInfo, name: e.target.value })}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
      >
        Pay Now
      </button>
    </form>
  );
}
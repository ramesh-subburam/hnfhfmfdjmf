import React from 'react';
import { CreditCard, Smartphone, Building2 } from 'lucide-react';
import type { PaymentMethod } from '../../types/Payment';

interface PaymentMethodSelectorProps {
  selected: PaymentMethod;
  isWholesale: boolean;
  onSelect: (method: PaymentMethod) => void;
}

export default function PaymentMethodSelector({ 
  selected, 
  isWholesale, 
  onSelect 
}: PaymentMethodSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-display font-semibold mb-4 text-primary-800">Select Payment Method</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() => onSelect('credit-card')}
          className={`flex items-center p-4 border rounded-lg ${
            selected === 'credit-card' 
              ? 'border-primary-600 bg-primary-50' 
              : 'border-gray-200 hover:border-primary-300'
          }`}
        >
          <CreditCard className="h-6 w-6 mr-3 text-primary-600" />
          <div className="text-left">
            <div className="font-medium">Credit Card</div>
            <div className="text-sm text-gray-500">Visa, MasterCard</div>
          </div>
        </button>

        {/* Similar updates for other payment buttons */}
      </div>
    </div>
  );
}
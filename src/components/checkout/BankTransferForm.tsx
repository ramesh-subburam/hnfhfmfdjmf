import React, { useState } from 'react';
import type { BankTransferInfo } from '../../types/Payment';

interface BankTransferFormProps {
  onSubmit: (bankInfo: BankTransferInfo) => void;
}

export default function BankTransferForm({ onSubmit }: BankTransferFormProps) {
  const [bankInfo, setBankInfo] = useState<BankTransferInfo>({
    accountName: '',
    accountNumber: '',
    bankName: '',
    ifscCode: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(bankInfo);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Account Holder Name</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          value={bankInfo.accountName}
          onChange={(e) => setBankInfo({ ...bankInfo, accountName: e.target.value })}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Account Number</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          value={bankInfo.accountNumber}
          onChange={(e) => setBankInfo({ ...bankInfo, accountNumber: e.target.value })}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Bank Name</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          value={bankInfo.bankName}
          onChange={(e) => setBankInfo({ ...bankInfo, bankName: e.target.value })}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">IFSC Code</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          value={bankInfo.ifscCode}
          onChange={(e) => setBankInfo({ ...bankInfo, ifscCode: e.target.value })}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
      >
        Submit Bank Details
      </button>
    </form>
  );
}
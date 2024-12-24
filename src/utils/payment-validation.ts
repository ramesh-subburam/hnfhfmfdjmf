export const validateCreditCard = (number: string): boolean => {
  // Luhn algorithm implementation
  const digits = number.replace(/\D/g, '');
  if (digits.length !== 16) return false;

  let sum = 0;
  let isEven = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i]);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
};

export const validateExpiryDate = (expiry: string): boolean => {
  const [month, year] = expiry.split('/').map(num => parseInt(num));
  if (!month || !year) return false;

  const now = new Date();
  const currentYear = now.getFullYear() % 100;
  const currentMonth = now.getMonth() + 1;

  return (
    month >= 1 &&
    month <= 12 &&
    year >= currentYear &&
    (year > currentYear || month >= currentMonth)
  );
};

export const formatCreditCardNumber = (number: string): string => {
  const digits = number.replace(/\D/g, '');
  return digits.replace(/(\d{4})/g, '$1 ').trim();
};
import Link from 'next/link';
import { useState } from 'react';
import StudentDashboardLayout from '@/layouts/StudentDashboardLayout';

export default function PaymentMethodsPage() {
  const cards: Array<{ brand: string; last4: string; exp: string }> = [];
  const [showUPIModal, setShowUPIModal] = useState(false);
  const [upiId, setUpiId] = useState('');

  const handlePayWithUPI = () => {
    if (!upiId.trim()) {
      alert('Please enter your UPI ID.');
      return;
    }
    // Simulate payment success
    alert(`Payment successful via ${upiId}!`);
    setShowUPIModal(false);
    setUpiId('');
  };

  return (
    <StudentDashboardLayout>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Payment Methods</h1>
        <div className="flex gap-2">
          <Link
            href="/student/payment-methods/add-card"
            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white"
          >
            Add Card
          </Link>
          <button
            onClick={() => setShowUPIModal(true)}
            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white"
          >
            Pay with UPI
          </button>
        </div>
      </div>

      {cards.length === 0 ? (
        <div className="rounded-xl border bg-white p-6 text-gray-600">
          No saved cards yet.
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border bg-white">
          <div className="grid grid-cols-3 border-b bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700">
            <div>Brand</div>
            <div>Last 4</div>
            <div className="text-right">Expiry</div>
          </div>
          {cards.map((c, idx) => (
            <div
              key={idx}
              className="grid grid-cols-3 items-center px-4 py-3 text-sm text-gray-700"
            >
              <div className="font-medium">{c.brand}</div>
              <div>•••• {c.last4}</div>
              <div className="text-right">{c.exp}</div>
            </div>
          ))}
        </div>
      )}

      {/* ---- UPI MODAL ---- */}
      {showUPIModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="rounded-lg bg-white p-6 w-96 shadow-lg">
            <h2 className="text-lg font-semibold mb-3">Pay via UPI</h2>
            <p className="text-sm text-gray-600 mb-3">
              Enter your UPI ID to make the payment.
            </p>
            <input
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              placeholder="example@upi"
              className="w-full border rounded-md px-3 py-2 mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowUPIModal(false)}
                className="px-4 py-2 rounded-md border"
              >
                Cancel
              </button>
              <button
                onClick={handlePayWithUPI}
                className="px-4 py-2 rounded-md bg-green-600 text-white font-semibold"
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </StudentDashboardLayout>
  );
}

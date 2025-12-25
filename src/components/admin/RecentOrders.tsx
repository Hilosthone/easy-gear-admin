const orders = [
  { id: '#001', customer: 'John Doe', status: 'Delivered', amount: '₦45,000' },
  { id: '#002', customer: 'Sarah Smith', status: 'Pending', amount: '₦12,500' },
]

export default function RecentOrders() {
  return (
    <table className='w-full text-left'>
      <thead className='bg-slate-50 text-slate-500 text-xs uppercase font-bold'>
        <tr>
          <th className='px-6 py-4'>Order ID</th>
          <th className='px-6 py-4'>Customer</th>
          <th className='px-6 py-4'>Status</th>
          <th className='px-6 py-4 text-right'>Amount</th>
        </tr>
      </thead>
      <tbody className='divide-y divide-slate-100'>
        {orders.map((order) => (
          <tr key={order.id} className='text-sm'>
            <td className='px-6 py-4 font-medium'>{order.id}</td>
            <td className='px-6 py-4'>{order.customer}</td>
            <td className='px-6 py-4 text-orange-600 font-semibold'>
              {order.status}
            </td>
            <td className='px-6 py-4 text-right font-bold'>{order.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

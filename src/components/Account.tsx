import { ReactNode, useState, useEffect } from 'react';
import { User, ShoppingCart, CreditCard, Heart, LogOut, Package, PlusCircle, Edit, Globe, Share2 } from 'lucide-react';
import type { Order, PaymentMethod } from '../types';
import { supabase } from '../supabaseClient';
import type { User as SupabaseUser } from '@supabase/supabase-js';

interface AccountProps {
  onLogout: () => void;
}

const ORDERS: Order[] = [
  {
    id: 'ORD-2024-0891',
    title: 'Circular Mandala Mirror Work',
    date: 'Ordered on Oct 12, 2024',
    price: 345.00,
    status: 'Shipped',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ui5r5-0NsmnPzl7KxfCjUt-VryHpIDnBO8keCpdSygEH84ysDsdczVp7W6Wg5V2A77F82aonV-lZVkJ2SWYngTz4f-CY657U0WhG9cWQRp_Yxm5vUTP2ygSE1Q4m1OzlVMq_baGpKk7MqiGZSpf2QKiSL-iow6aHVnF_7K4uFJ0CVtwQG49C8uokQljSXYo8w0dOWPNstuJKT2YZyx7-HPegi1ReeyX38VAz3BWnr2XcmFJ89hyryM3Bed5',
    shippingType: 'Free Shipping'
  },
  {
    id: 'ORD-2024-0712',
    title: 'Tree of Life - Mud Relief',
    date: 'Ordered on Sep 14, 2024',
    price: 520.00,
    status: 'Delivered',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ui5r5-0NsmnPzl7KxfCjUt-VryHpIDnBO8keCpdSygEH84ysDsdczVp7W6Wg5V2A77F82aonV-lZVkJ2SWYngTz4f-CY657U0WhG9cWQRp_Yxm5vUTP2ygSE1Q4m1OzlVMq_baGpKk7MqiGZSpf2QKiSL-iow6aHVnF_7K4uFJ0CVtwQG49C8uokQljSXYo8w0dOWPNstuJKT2YZyx7-HPegi1ReeyX38VAz3BWnr2XcmFJ89hyryM3Bed5',
    shippingType: 'Express Shipping'
  }
];

const PAYMENT_METHODS: PaymentMethod[] = [
  { id: '1', type: 'VISA', last4: '4242', expiry: '12/26' },
  { id: '2', type: 'placeholder', last4: '', expiry: '', isPlaceholder: true }
];

export default function Account({ onLogout }: AccountProps) {
  const [user, setUser] = useState<SupabaseUser | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });
  }, []);

  const fullName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Artisan';
  const role = user?.user_metadata?.role || 'Collector';
  const avatarUrl = user?.user_metadata?.avatar_url || 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVDHB71uFOy9RRaQGiUMWbKtRWRO-WOdmou6CJ5ID1D-4n0zXbs7p3EJgisw4PlwkhnNn21Dl7cKtKuSWoLC2BFp8sewjg1c4fU3dEVWDu2BK7r9WOj50ESTt3WwBhvvpSdjgKW0kQsJMBFa7JZQ8JRqjRq5SYvlmGNc9b1tDUMnqzVEjuzOg6nJXvma-AVa9aX8aUaG7hS9aIKMAhzN1EuifOPXltL6w4COU4icE7BipO8IMrR208ECKpj2cTJ0IKPuKknwdtQWat';

  return (
    <main className="min-h-screen py-32 px-6 md:px-16 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Sidebar */}
        <aside className="md:col-span-3">
          <div className="sticky top-32 space-y-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  src={avatarUrl} 
                  alt={fullName}
                />
              </div>
              <div>
                <h2 className="text-lg font-bold text-on-surface">{fullName}</h2>
                <p className="text-xs text-on-surface-variant">{role}</p>
              </div>
            </div>


            <nav className="flex flex-col gap-1">
              <SidebarLink icon={<User className="w-5 h-5"/>} label="Profile" />
              <SidebarLink icon={<ShoppingCart className="w-5 h-5"/>} label="Orders" active />
              <SidebarLink icon={<CreditCard className="w-5 h-5"/>} label="Payments" />
              <SidebarLink icon={<Heart className="w-5 h-5"/>} label="Wishlist" />
              <div className="h-px bg-outline-variant/30 my-4"></div>
              <button 
                onClick={onLogout}
                className="flex items-center gap-3 px-6 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium font-sans">Logout</span>
              </button>
            </nav>
          </div>
        </aside>

        {/* Content */}
        <section className="md:col-span-9 space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h1 className="text-4xl text-on-surface mb-2">My Orders</h1>
              <p className="text-on-surface-variant font-medium">Manage and track your handcrafted Lippan art orders.</p>
            </div>
            <button className="bg-surface-container-high border-none px-6 py-3 rounded-[1.5rem] text-sm font-bold text-on-surface-variant hover:bg-surface-container-highest transition-colors">
              Last 6 Months
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {ORDERS.map((order) => (
              <div key={order.id} className="bg-white rounded-[2rem] border border-outline-variant/20 overflow-hidden flex flex-col sm:flex-row hover:shadow-xl transition-all group">
                <div className="w-full sm:w-48 h-48 bg-surface-container-low p-6 flex items-center justify-center overflow-hidden">
                  <img 
                    alt={order.title} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
                    src={order.image} 
                  />
                </div>
                <div className="flex-grow p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${order.status === 'Shipped' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                          {order.status}
                        </span>
                        <span className="text-on-surface-variant text-xs font-medium">{order.id}</span>
                      </div>
                      <h3 className="text-xl text-on-surface">{order.title}</h3>
                      <p className="text-on-surface-variant text-sm font-medium">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl text-primary font-bold">${order.price.toFixed(2)}</p>
                      <p className="text-xs text-on-surface-variant font-medium mt-1">{order.shippingType}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    {order.status === 'Shipped' ? (
                      <button className="bg-primary text-on-primary px-6 py-2 rounded-full text-sm font-bold shadow-lg hover:shadow-primary/20 transition-all">
                        Track Order
                      </button>
                    ) : (
                      <button className="bg-surface-container text-on-surface-variant px-6 py-2 rounded-full text-sm font-bold hover:bg-surface-container-high transition-colors">
                        Write Review
                      </button>
                    )}
                    <button className="text-primary font-bold text-sm bg-primary/5 px-6 py-2 rounded-full hover:bg-primary/10 transition-colors">
                      Order Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="pt-12">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-2xl text-on-surface mb-1">Payment Methods</h2>
                <p className="text-on-surface-variant text-sm">Securely saved options for your next purchase.</p>
              </div>
              <button className="text-primary font-bold text-sm flex items-center gap-2 hover:underline">
                <PlusCircle className="w-4 h-4" /> Add New
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PAYMENT_METHODS.map((method) => (
                method.isPlaceholder ? (
                  <div key={method.id} className="bg-surface-container-low rounded-[1.5rem] border-2 border-dashed border-outline-variant/30 flex items-center justify-center p-8 cursor-pointer hover:bg-surface-container transition-colors group">
                    <div className="text-center space-y-2">
                      <PlusCircle className="w-8 h-8 text-primary mx-auto group-hover:scale-110 transition-transform" />
                      <p className="text-sm font-bold text-on-surface-variant">Add another card</p>
                    </div>
                  </div>
                ) : (
                  <div key={method.id} className="bg-white p-8 rounded-[1.5rem] border border-outline-variant/20 flex items-center gap-6 shadow-sm hover:shadow-md transition-all">
                    <div className="w-16 h-10 bg-surface-container rounded-lg flex items-center justify-center font-bold text-xs text-on-surface-variant shadow-inner">
                      {method.type}
                    </div>
                    <div className="flex-grow">
                      <p className="text-base font-bold text-on-surface font-mono">•••• •••• •••• {method.last4}</p>
                      <p className="text-xs text-on-surface-variant">Expires {method.expiry}</p>
                    </div>
                    <button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container">
                      <Edit className="w-5 h-5" />
                    </button>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function SidebarLink({ icon, label, active = false }: { icon: ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`flex items-center gap-4 px-6 py-4 rounded-xl transition-all group ${active ? 'bg-primary-container text-on-primary shadow-lg' : 'text-on-surface-variant hover:bg-surface-container'}`}>
      <span className={`${active ? 'text-on-primary' : 'text-on-surface-variant group-hover:text-primary'}`}>
        {icon}
      </span>
      <span className="font-bold font-sans">{label}</span>
    </button>
  );
}

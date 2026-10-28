import React, { useState } from 'react';
import { Coffee, Pizza, Utensils, Cake, Sparkles, Check } from 'lucide-react';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('brews');

  const categories = [
    { id: 'brews', name: 'Specialty Coffee & Teas', icon: Coffee },
    { id: 'pizzas', name: 'Wood-Fired Pizzas & Pastas', icon: Pizza },
    { id: 'mains', name: 'Continental Bites & Mains', icon: Utensils },
    { id: 'bakery', name: 'Artisan Bakery & Desserts', icon: Cake },
  ];

  const menuItems = {
    brews: [
      {
        name: 'Single Origin Estate Pour-Over',
        price: '₹240',
        description: 'Pour-over brew highlighting light floral acidity and caramel undertones from Chikmagalur Arabica.',
        badge: 'Single Origin',
        diet: 'veg',
      },
      {
        name: 'Hazelnut Velvet Cappuccino',
        price: '₹260',
        description: 'Double espresso shot balanced with steamed micro-foam and subtle roasted hazelnut extract.',
        badge: 'House Favorite',
        diet: 'veg',
      },
      {
        name: 'Iced Salted Caramel Macchiato',
        price: '₹280',
        description: 'Cold whole milk, house-crafted salted butter caramel drizzle, and bold dark roast espresso.',
        badge: 'Best Seller',
        diet: 'veg',
      },
      {
        name: 'Vietnamese Style Drip Coffee',
        price: '₹260',
        description: 'Traditional slow phin drip over condensed milk with bold Robusta & Arabica roast.',
        badge: 'Traditional',
        diet: 'veg',
      },
      {
        name: 'Kashmiri Kahwa Saffron Infusion',
        price: '₹220',
        description: 'Whole green tea leaves infused with saffron strands, crushed almonds, cinnamon, and cardamom.',
        badge: 'Herbal & Warm',
        diet: 'veg',
      },
      {
        name: 'Belgian Mocha Frappe',
        price: '₹310',
        description: 'Blended espresso, Belgian chocolate ganache, whipped dairy cream, and shaved cacao.',
        badge: 'Indulgent',
        diet: 'veg',
      },
    ],
    pizzas: [
      {
        name: 'Margherita di Bufala',
        price: '₹460',
        description: 'San Marzano tomato base, fresh buffalo mozzarella, fragrant sweet basil, extra virgin olive oil.',
        badge: 'Classic Wood-Fired',
        diet: 'veg',
      },
      {
        name: 'Wild Forest Truffle Mushroom',
        price: '₹540',
        description: 'White garlic cream base, sautéed porcini & button mushrooms, fontina cheese, white truffle glaze.',
        badge: "Chef's Special",
        diet: 'veg',
      },
      {
        name: 'Penne all’Arrabbiata Tradizionale',
        price: '₹420',
        description: 'Bronze-die penne tossed in fiery slow-simmered plum tomato sauce, garlic, and fresh parsley.',
        badge: 'Authentic Italian',
        diet: 'veg',
      },
      {
        name: 'Genovese Basil Pesto Fusilli',
        price: '₹480',
        description: 'Spiral fusilli enveloped in crushed pine nut and sweet basil pesto, finished with aged Parmigiano.',
        badge: 'Nutty & Rich',
        diet: 'veg',
      },
      {
        name: 'Smoked Pepperoni Rustica',
        price: '₹590',
        description: 'Traditional wood-fired crust topped with slow-cured smoked chicken pepperoni and shredded provolone.',
        badge: 'Hearty',
        diet: 'non-veg',
      },
      {
        name: 'Four-Cheese Quattro Formaggi',
        price: '₹560',
        description: 'Gorgonzola, mozzarella, parmesan, and creamy ricotta on slow-fermented 48-hour sourdough.',
        badge: 'Cheese Lovers',
        diet: 'veg',
      },
    ],
    mains: [
      {
        name: 'Smoked Paneer & Sun-dried Tomato Panini',
        price: '₹380',
        description: 'Pressed ciabatta loaf filled with marinated cottage cheese, pesto mayonnaise, and baby spinach.',
        badge: 'Crunchy Ciabatta',
        diet: 'veg',
      },
      {
        name: 'Rosemary Garlic Herb Chicken Breast',
        price: '₹520',
        description: 'Pan-seared tender chicken breast served with mashed potato quenelle and sautéed garden greens.',
        badge: 'High Protein',
        diet: 'non-veg',
      },
      {
        name: 'Avocado Tartine on Sourdough',
        price: '₹390',
        description: 'Toasted artisanal country sourdough, smashed Hass avocado, pomegranate jewels, micro-greens, chili flakes.',
        badge: 'Healthy Choice',
        diet: 'veg',
      },
      {
        name: 'Mediterranean Mezze Platter',
        price: '₹490',
        description: 'Crispy falafels, smoked paprika hummus, tzatziki, pickled olives, and warm zaatar pita bread.',
        badge: 'Sharing Board',
        diet: 'veg',
      },
    ],
    bakery: [
      {
        name: 'Warm Belgian Chocolate Lava Cake',
        price: '₹290',
        description: 'Baked individual chocolate fondant cake with a molten center, paired with vanilla bean gelato.',
        badge: 'Freshly Baked',
        diet: 'veg',
      },
      {
        name: 'Classic Venetian Tiramisu',
        price: '₹320',
        description: 'Coffee-soaked Savoiardi ladyfingers layered with whipped mascarpone cream and Dutch cocoa.',
        badge: 'Signature Dessert',
        diet: 'veg',
      },
      {
        name: 'New York Baked Blueberry Cheesecake',
        price: '₹310',
        description: 'Silky cream cheese filling on buttered graham cracker crust with wild blueberry compote.',
        badge: 'Crowd Favorite',
        diet: 'veg',
      },
      {
        name: 'Almond Croissant Toast',
        price: '₹240',
        description: 'Flaky butter croissant filled with frangipane almond cream and toasted sliced almonds.',
        badge: 'Parisian Baker',
        diet: 'veg',
      },
    ],
  };

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-stone-800/80 bg-stone-950/40 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs text-amber-500 uppercase tracking-widest block mb-2">
            // CULINARY SELECTIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-100 tracking-tight mb-4">
            Curated Bites & Handcrafted Brews
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Freshly prepared with authentic farm-sourced ingredients, artisan slow-fermented doughs, and ethically harvested beans.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-amber-600 text-stone-950 shadow-lg shadow-amber-600/30 font-semibold scale-105'
                    : 'bg-stone-900/80 text-stone-300 hover:text-white border border-stone-800 hover:border-amber-700/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems[activeCategory].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-stone-900/70 border border-stone-800 hover:border-amber-700/50 transition-all hover:shadow-xl hover:shadow-amber-950/20 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-full border flex items-center justify-center shrink-0 ${
                        item.diet === 'veg'
                          ? 'border-emerald-500 text-emerald-500'
                          : 'border-rose-500 text-rose-500'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          item.diet === 'veg' ? 'bg-emerald-500' : 'bg-rose-500'
                        }`}
                      ></span>
                    </span>
                    <h3 className="font-serif font-bold text-base text-stone-100 group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <span className="font-mono text-sm font-bold text-amber-400 shrink-0">
                    {item.price}
                  </span>
                </div>

                <p className="text-xs text-stone-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] font-mono text-stone-500">
                <span className="px-2 py-0.5 rounded bg-stone-950 border border-stone-800 text-amber-500/90 font-medium">
                  {item.badge}
                </span>
                <span>Fresh Order</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

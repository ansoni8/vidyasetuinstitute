// --- NEW: Define the type for our item ---
type ItemType = {
  id: number;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
};

// --- Helper: Dummy Data ---
// We create a variety of image sizes to showcase the "brick-like" masonry effect.
// --- UPDATED: Using the 6 items you provided ---
const items: ItemType[] = [ // <-- Added type
  {
    id: 1,
    title: 'Architectural Wonder',
    description: 'Exploring the clean lines and modern design of urban architecture.',
    link: '#',
    imageUrl: 'https://placehold.co/600x400/3498db/ffffff?text=Project+1',
  },
  {
    id: 2,
    title: 'Forest Retreat',
    description: 'A quiet cabin getaway, deep in the heart of the forest.',
    link: '#',
    imageUrl: 'https://placehold.co/600x550/2ecc71/ffffff?text=Project+2',
  },
  {
    id: 3,
    title: 'Coastal Drive',
    description: 'Chasing the horizon along a scenic coastal highway.',
    link: '#',
    imageUrl: 'https://placehold.co/600x450/e74c3c/ffffff?text=Project+3',
  },
  {
    id: 4,
    title: 'Mountain Peak',
    description: 'The view from the top is always worth the climb.',
    link: '#',
    imageUrl: 'https://placehold.co/600x600/9b59b6/ffffff?text=Project+4',
  },
  {
    id: 5,
    title: 'Urban Jungle',
    description: 'Finding greenery in the midst of a concrete jungle.',
    link: '#',
    imageUrl: 'https://placehold.co/600x420/f1c40f/ffffff?text=Project+5',
  },
  {
    id: 6,
    title: 'Minimalist Interior',
    description: 'Simplicity, functionality, and elegance in modern design.',
    link: '#',
    imageUrl: 'https://placehold.co/600x500/1abc9c/ffffff?text=Project+6',
  }
];

// --- 1. Brick Card Component ---
// This is the individual item in the grid.
function BrickCard({ item }: { item: ItemType }) { // <-- Applied type to prop
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="relative rounded-lg shadow-lg bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:scale-[1.02]">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-auto object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {item.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {item.description}
          </p>
        </div>
      </div>
    </a>
  );
}

// --- 2. Main App Component ---
// This component contains all the logic for the scrolling grid.
export default function App() {
  // --- Content for DESKTOP (animated) ---
  const duplicatedItems: ItemType[] = [...items, ...items]; // <-- Added type
  const columns: ItemType[][] = [[], [], []]; // <-- Added type
  duplicatedItems.forEach((item, index) => {
    columns[index % 3].push(item);
  });
  const animationDurations = ['18s', '15s', '12s']; // Different speeds for staggered look

  return (
    <>
      {/* --- Re-added <style> tag for animation --- */}
      <style>
        {`
          @keyframes scroll-up {
            0% {
              transform: translateY(0);
            }
            100% {
              /* UPDATED: Animate to -30% since we doubled the content */
              transform: translateY(-30%);
            }
          }
        `}
      </style>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 font-sans p-4">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-2">
            Vertical Showcase
          </h1>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-8">
            {/* --- Updated text --- */}
            Hover to pause and scroll manually.
          </p>
        </div>

        {/* --- DESKTOP-ONLY ANIMATED VIEW ---
            - 'hidden' on mobile, 'grid' on desktop ('md' and up)
            - This is the animated 3-column layout
        */}
        <div className="w-full max-w-6xl h-[70vh] overflow-y-auto group hidden md:grid grid-cols-3 gap-4">
          
          {columns.map((columnItems, colIndex) => (
            <div
              key={colIndex}
              className="
                flex flex-col gap-4 
                will-change-transform
                animate-[scroll-up_linear_infinite]
                group-hover:[animation-play-state:paused]
              "
              // Apply a different duration and a negative delay to each column 
              // for the staggered brick effect
              style={{
                animationDuration: animationDurations[colIndex],
                animationDelay: `-${colIndex * 7}s`, // Start them at different points
              }}
            >
              {/* Map over the items for this specific column */}
              {columnItems.map((item, index) => (
                <BrickCard item={item} key={`${item.id}-${index}`} />
              ))}
            </div>
          ))}
        </div>

        {/* --- MOBILE-ONLY STATIC VIEW ---
            - 'block' on mobile, 'hidden' on desktop ('md' and up)
            - This uses CSS columns for a masonry effect and maps the ORIGINAL items
            - 'columns-1' for phones, 'sm:columns-2' for small tablets
        */}
        <div className="w-full max-w-6xl h-[70vh] overflow-y-auto block md:hidden flex flex-col gap-4">
          
          {/* We map over the ORIGINAL 'items' array so they only appear once */}
          {items.map((item) => (
            <div key={item.id} className="break-inside-avoid">
              {/* 'break-inside-avoid' prevents cards from breaking across columns */}
              <BrickCard item={item} />
            </div>
          ))}

        </div>
      </div>
    </>
  );
}


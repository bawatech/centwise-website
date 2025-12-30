// components/PlaceholderImage.tsx
export default function PlaceholderImage() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center p-8">
        <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-6">
          <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Add Your Screenshots</h3>
        <p className="text-gray-600 max-w-md mb-4">
          Place your screenshots in the public/screenshots folder as:
        </p>
        <ul className="text-left text-gray-600 text-sm max-w-md mx-auto space-y-1">
          <li>• dashboard.png (1200x800 recommended)</li>
          <li>• employee-management.png</li>
          <li>• add-employee.png</li>
        </ul>
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-700 text-sm">
            Using placeholder gradients. Replace with actual screenshots for production.
          </p>
        </div>
      </div>
    </div>
  );
}
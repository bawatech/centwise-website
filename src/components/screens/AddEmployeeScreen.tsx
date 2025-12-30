// components/screens/AddEmployeeScreen.tsx
export default function AddEmployeeScreen() {
  return (
    <div className="bg-white h-full">
      {/* This screen will show your employee onboarding form */}
      <div className="h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="text-center p-8">
          <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Add Employee</h3>
          <p className="text-gray-600 max-w-md mx-auto mb-6">
            Onboard new team members with personal details, salary information, and payroll setup
          </p>
          <div className="inline-flex space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
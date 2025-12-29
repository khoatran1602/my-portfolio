export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="relative">
        <div className="h-12 w-12 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
        <div className="absolute top-0 left-0 h-12 w-12 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
      </div>
    </div>
  );
}

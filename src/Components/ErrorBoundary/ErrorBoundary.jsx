import { ErrorBoundary } from "react-error-boundary";

function CustomErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="h-[100vh] flex justify-center items-center px-6">
    <div role="alert" className="alert alert-error">
      <p>Something went Wrong:</p>
      <div>{error?.message}</div>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
   </div>
  );
}

export default function CustomErrorBoundaryUI({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={CustomErrorFallback}
      onReset={() => window.location.reload()}
    >
      {children}
    </ErrorBoundary>
  );
}

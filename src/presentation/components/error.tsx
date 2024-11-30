interface ErrorProps {
    error: Error | null;
}

// This component is responsible for rendering an error message.
export const Error = ({ error }: ErrorProps) => {
    if (!error) return null; // If there's no error, return nothing.

    return (
        <div className="grid h-screen px-4 text-center bg-white place-content-center">
            <h1 className="text-3xl tracking-widest text-gray-500 uppercase">Error</h1>
            <p className="mt-2 text-lg text-red-500">{error.message || "An unexpected error occurred."}</p>
        </div>
    );
}
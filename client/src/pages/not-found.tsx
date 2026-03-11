import { useDocumentTitle } from "@/hooks/use-document-title";
import { Link } from "wouter";

export default function NotFound() {
  useDocumentTitle("Page Not Found | Grumming");
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background px-4 text-center">
      <p className="text-6xl font-bold text-foreground mb-4">404</p>
      <h1 className="text-xl font-semibold text-foreground mb-2">Page not found</h1>
      <p className="text-muted-foreground text-sm max-w-sm mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium"
        data-testid="link-back-home"
      >
        Back to Home
      </Link>
    </div>
  );
}

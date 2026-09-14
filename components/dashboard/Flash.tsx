import { Alert } from "@/components/ui/Alert";

export function Flash({
  saved,
  deleted,
  error,
}: {
  saved?: boolean;
  deleted?: boolean;
  error?: string;
}) {
  if (error) return <Alert tone="error" className="mt-6 mb-6">{error}</Alert>;
  if (saved) return <Alert tone="success" className="mt-6 mb-6">Saved to the project.</Alert>;
  if (deleted) return <Alert tone="success" className="mt-6 mb-6">Deleted.</Alert>;
  return null;
}

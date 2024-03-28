import { TriangleAlert } from "lucide-react";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-2 rounded-md bg-destructive/50 p-3 text-sm text-red-500">
      <TriangleAlert className="h-5 w-5" />
      <p>{message}</p>
    </div>
  );
};

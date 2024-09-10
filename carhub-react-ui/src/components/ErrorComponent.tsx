import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface ErrorProps {
  title?: string
  message: string
  actionLabel?: string
  actionFn?: () => void
}

export default function Error({
  title = "An error occurred",
  message,
  actionLabel,
  actionFn
}: ErrorProps) {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-4">
      <Alert variant="destructive" className="max-w-md">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle className="mb-2">{title}</AlertTitle>
        <AlertDescription className="mb-4">{message}</AlertDescription>
        {actionLabel && actionFn && (
          <Button variant="outline" onClick={actionFn}>
            {actionLabel}
          </Button>
        )}
      </Alert>
    </div>
  )
}
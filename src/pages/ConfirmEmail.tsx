import { useSearchParams, Link } from "react-router-dom";
import { MailCheck, Clock, LogIn } from "lucide-react";

const ConfirmEmail = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");

  return (
    <div className="flex min-h-screen items-center justify-center bg-ing-neutral px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-form">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-ing-accent/10">
          <MailCheck className="h-8 w-8 text-ing-accent" />
        </div>

        <h1 className="mb-3 font-heading text-2xl font-bold tracking-tight text-ing-heading">
          Email Confirmed!
        </h1>

        {role === "customer" && (
          <div>
            <p className="mb-6 text-ing-body">
              Your email has been verified. You can now sign in to the
              InspectnGO app.
            </p>
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
              <LogIn className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-sm font-medium text-ing-heading">
              Open the app and sign in to get started.
            </p>
          </div>
        )}

        {role === "mechanic" && (
          <div>
            <p className="mb-6 text-ing-body">
              Your email has been verified. Your account is currently under
              review.
            </p>
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50">
              <Clock className="h-6 w-6 text-amber-600" />
            </div>
            <p className="text-sm font-medium text-ing-heading">
              This usually takes a few hours — we'll notify you once you're
              approved.
            </p>
          </div>
        )}

        {role !== "customer" && role !== "mechanic" && (
          <p className="mb-2 text-ing-body">
            Your email has been successfully verified.
          </p>
        )}
      </div>
    </div>
  );
};

export default ConfirmEmail;

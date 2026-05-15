import { Button } from "./Button";

interface ErrorTryAgainProps {
  onClick: () => void;
}

export function ErrorTryAgain({ onClick }: ErrorTryAgainProps) {
  return (
    <>
      <p className="text-gray-500">Apologies, we seem to be having some technical issues 🙈</p>
      <Button className="mx-auto mt-4 mb-6" onClick={onClick}>
        Try again
      </Button>
    </>
  );
}

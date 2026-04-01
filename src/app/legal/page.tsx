export default function LegalPage() {
  return (
    <div className="min-h-[70vh] bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Legal & Privacy</h1>
        <div className="mt-8 prose prose-slate">
          <h3>Terms of Service</h3>
          <p className="text-slate-600">
            Welcome to AutoTrip Perth. These terms outline the rules and regulations for the use of our car rental services.
            By renting a vehicle, you agree to these terms. All renters must hold a valid driver&apos;s license and meet our minimum age requirements.
          </p>
          
          <h3 className="mt-8">Privacy Policy</h3>
          <p className="text-slate-600">
            We are committed to protecting your personal information. We only collect details necessary to process your booking and communicate with you.
            Your data is stored securely and never sold to third parties.
          </p>

          <h3 className="mt-8">Cookies Policy</h3>
          <p className="text-slate-600">
            Our website uses minimal cookies to ensure a smooth booking experience and to analyze site traffic. You can choose to disable cookies through your browser settings, though some site features may not function properly.
          </p>
        </div>
      </div>
    </div>
  );
}

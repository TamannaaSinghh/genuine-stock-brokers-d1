import Script from "next/script";

// EnableUser accessibility widget. The brand green (#097a48 — brand-700, the
// same green as .btn-primary) is baked into public/enablestack-widget.js at
// install time; it is restated here so the page config is self-describing and
// wins over the baked default if the two ever drift.
export default function AccessibilityWidget() {
  return (
    <>
      <Script id="enablestack-config" strategy="beforeInteractive">
        {`window.ENABLESTACK_CONFIG = {
  colors: { primary: "#097a48" },
  icon: "default",
  widgetPosition: { side: "right" },
  accessibilityStatementUrl: ""
};`}
      </Script>
      <Script src="/enablestack-widget.js" strategy="afterInteractive" />
    </>
  );
}

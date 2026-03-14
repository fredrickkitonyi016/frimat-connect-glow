interface PaystackPopupOptions {
  key: string;
  email: string;
  amount: number; // in kobo/cents
  currency?: string;
  ref?: string;
  metadata?: Record<string, unknown>;
  callback: (response: { reference: string; status: string }) => void;
  onClose: () => void;
}

interface PaystackPopup {
  setup(options: PaystackPopupOptions): { openIframe: () => void };
}

interface Window {
  PaystackPop: PaystackPopup;
}

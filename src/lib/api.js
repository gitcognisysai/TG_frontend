// API Client to communicate with the Express/Python Backend
// const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api";
const API_BASE_URL =
  import.meta.env.VITE_BACKEND_URL || ""https://api.tgecetwp.in/api";

console.log("API_BASE_URL:", API_BASE_URL);

export const api = {
  // Payment APIs (SBIePay)
  payment: {
    encryptRequest: async (payload) => {
      try {
        const res = await fetch(`${API_BASE_URL}/payment/encrypt-request`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to encrypt request");
        return { data, error: null };
      } catch (err) {
        return { data: null, error: err };
      }
    },
    decryptResponse: async (encryptedResponse) => {
      try {
        const res = await fetch(`${API_BASE_URL}/payment/decrypt-response`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ encryptedResponse }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to decrypt response");
        return { data, error: null };
      } catch (err) {
        return { data: null, error: err };
      }
    },
    checkStatus: async (transactionId) => {
      try {
        const res = await fetch(`${API_BASE_URL}/payment/check-status`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ transactionId }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to check status");
        return { data, error: null };
      } catch (err) {
        return { data: null, error: err };
      }
    },
  },

  // Application Form APIs
  application: {
    fetchPaymentDetails: async (payload) => {
      try {
        const res = await fetch(`${API_BASE_URL}/application/fetch-payment-details`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to fetch payment details");
        return { data: data.data, error: null };
      } catch (err) {
        return { data: null, error: err };
      }
    },
    submitApplication: async (payload) => {
      try {
        const res = await fetch(`${API_BASE_URL}/application/submit-application`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to submit application");
        return { data, error: null };
      } catch (err) {
        return { data: null, error: err };
      }
    },
  },
};

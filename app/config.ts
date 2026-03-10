const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.modaash.com";
const SUPPORT_EMAIL = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@modaash.com";

export const config = {
  appUrl: APP_URL,
  dashboardUrl: `${APP_URL}/dashboard`,
  loginUrl: `${APP_URL}/login`,
  registerUrl: `${APP_URL}/register`,
  supportEmail: SUPPORT_EMAIL,
  supportMailto: `mailto:${SUPPORT_EMAIL}`,
} as const;

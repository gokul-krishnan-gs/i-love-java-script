function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const firstChar = email[0];
  const lastChar = email[atIndex - 1];
  const domain = email.slice(atIndex);
  const mask = "*".repeat(atIndex - 2);

  return `${firstChar}${mask}${lastChar}${domain}`;
}

export function snakeToTitleCase(snakeStr: string): string {
  return snakeStr
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export const cx = (...classNameCollection: (string | boolean | undefined)[]) =>
  classNameCollection.filter(Boolean).join(' ');

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (error && typeof error === 'object' && 'message' in error) {
    return String(error.message);
  }
  if (typeof error === 'string') {
    return error;
  }
  return 'An error occurred';
}

export function goto(path: string) {
  document.location.replace(path);
}

export function log(message: string, sender?: string | undefined) {
  console.log(`ℹ️ ${sender ? `[${sender}]: ` : ''}${message}`);
}

export function logError(message: string, sender?: string | undefined) {
  console.log(`❌ ${sender ? `[${sender}]: ` : ''}${message}`);
}

export function logSuccess(message: string, sender?: string | undefined) {
  console.log(`✅ ${sender ? `[${sender}]: ` : ''}${message}`);
}

export function logWarning(message: string, sender?: string | undefined) {
  console.log(`🟡 ${sender ? `[${sender}]: ` : ''}${message}`);
}

export function tokenSafeString(token: string) {
  return `${token.substring(0, 6)}...`;
}

export function logUnkownIssue(issue: string, sender: string) {}

export const getInitials = (str: string): string =>
  str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('');

export function formatTimestamp(timestamp: string): string {
  const now = new Date();
  const pastDate = new Date(timestamp);
  // @ts-expect-error no type
  const diff = now - pastDate;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 6) {
    return pastDate.toLocaleDateString(); // Show date if more than 6 days
  } else if (days > 0) {
    return `${days}d ago`;
  } else if (hours > 0) {
    return `${hours}h ago`;
  } else if (minutes > 0) {
    return `${minutes}m ago`;
  } else {
    return `${seconds}s ago`;
  }
}

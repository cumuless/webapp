export function snakeToTitleCase(snakeStr: string): string {
    return snakeStr
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export const cx = (...classNameCollection: (string | boolean | undefined)[]) =>
  classNameCollection.filter(Boolean).join(' ');

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (error && typeof error === "object" && "message" in error) {
    return String(error.message);
  }
  if (typeof error === "string") {
    return error;
  }
  return "An error occurred";
}

export function goto(path: string) {
  document.location.replace(path);
}

export function log(message: string, sender?: string | undefined) {
  console.log(`ℹ️ ${sender ? `[${sender}]: `: ''}${message}`)
}

export function logError(message: string, sender?: string | undefined) {
  console.log(`❌ ${sender ? `[${sender}]: `: ''}${message}`)
}

export function logSuccess(message: string, sender?: string | undefined) {
  console.log(`✅ ${sender ? `[${sender}]: `: ''}${message}`)
}

export function logWarning(message: string, sender?: string | undefined) {
  console.log(`🟡 ${sender ? `[${sender}]: `: ''}${message}`)
}

export function tokenSafeString(token: string) {
  return token;
}

export function logUnkownIssue(issue: string, sender: string) {
  
}

export const getInitials = (str: string): string => 
  str.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
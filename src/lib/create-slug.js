
export function createSlug(inputString) {
    // Replace spaces with hyphens and convert to lowercase
    return inputString.toLowerCase().replace(/\s+/g, '-');
  }
  
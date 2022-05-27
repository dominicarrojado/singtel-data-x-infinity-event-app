export async function getFakerJs() {
  return (await import('@faker-js/faker')).default;
}

export async function getCropperJs() {
  return (await import('cropperjs')).default;
}

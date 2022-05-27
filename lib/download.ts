import { IMAGE_DOWNLOAD_FILE_EXT, IMAGE_DOWNLOAD_TITLE } from './constants';

export function downloadImage(imageUrl: string) {
  const anchorEl = document.createElement('a');

  anchorEl.href = imageUrl;
  anchorEl.download = `${IMAGE_DOWNLOAD_TITLE}-${Date.now()}.${IMAGE_DOWNLOAD_FILE_EXT}`;

  document.body.appendChild(anchorEl);

  anchorEl.click();

  document.body.removeChild(anchorEl);
}

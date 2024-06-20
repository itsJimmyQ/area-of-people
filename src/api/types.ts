export interface LibraryDto {
  id: number;
  name: string;
  total_downloads: number;
  /**
   * In bytes
   */
  install_size: number;
  latest_version: string;
}

export interface LibraryDetailsDto extends LibraryDto {
  author: string;
  description: string;
  downloads_last_seven_days: number[];
  /**
   * ISO date string
   */
  last_publish_date: string;
  license: string;
}

export type Library = {
  id: string;
  name: string;
  author: string;
  description: string;
  total_downloads: number;
  downloads_last_seven_days: number[];
  install_size: number;
  last_publish_date: string;
  license: string;
  latest_version: string;
};

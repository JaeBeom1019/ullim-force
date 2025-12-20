/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: performances
 * Interface for 
 */
export interface  {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  synopsis?: string;
  /** @wixFieldType image */
  mainImage?: string;
  /** @wixFieldType text */
  genre?: string;
  /** @wixFieldType number */
  productionYear?: number;
  /** @wixFieldType date */
  performanceDate?: Date | string;
  /** @wixFieldType text */
  cast?: string;
  /** @wixFieldType text */
  director?: string;
  /** @wixFieldType number */
  runningTime?: number;
  /** @wixFieldType url */
  trailerUrl?: string;
}

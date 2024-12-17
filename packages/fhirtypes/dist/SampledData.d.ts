/*
 * This is a generated file
 * Do not edit manually.
 */

import { Extension } from './Extension';
import { Quantity } from './Quantity';

/**
 * A series of measurements taken by a device, with upper and lower
 * limits. There may be more than one dimension in the data.
 */
export interface SampledData {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * The base quantity that a measured value of zero represents. In
   * addition, this provides the units of the entire measurement series.
   */
  origin: Quantity;

  /**
   * The length of time between sampling times, measured in milliseconds.
   */
  period: number;

  /**
   * A correction factor that is applied to the sampled data points before
   * they are added to the origin.
   */
  factor?: number;

  /**
   * The lower limit of detection of the measured points. This is needed if
   * any of the data points have the value &quot;L&quot; (lower than detection
   * limit).
   */
  lowerLimit?: number;

  /**
   * The upper limit of detection of the measured points. This is needed if
   * any of the data points have the value &quot;U&quot; (higher than detection
   * limit).
   */
  upperLimit?: number;

  /**
   * The number of sample points at each time point. If this value is
   * greater than one, then the dimensions will be interlaced - all the
   * sample points for a point in time will be recorded at once.
   */
  dimensions: number;

  /**
   * A series of data points which are decimal values separated by a single
   * space (character u20). The special values &quot;E&quot; (error), &quot;L&quot; (below
   * detection limit) and &quot;U&quot; (above detection limit) can also be used in
   * place of a decimal value.
   */
  data?: string;
}

/*
 * This is a generated file
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Organization } from './Organization';
import { Ratio } from './Ratio';
import { Reference } from './Reference';
import { Resource } from './Resource';

/**
 * An ingredient of a manufactured item or pharmaceutical product.
 */
export interface MedicinalProductIngredient {

  /**
   * This is a MedicinalProductIngredient resource
   */
  readonly resourceType: 'MedicinalProductIngredient';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * The identifier(s) of this Ingredient that are assigned by business
   * processes and/or used to refer to it when a direct URL reference to
   * the resource itself is not appropriate.
   */
  identifier?: Identifier;

  /**
   * Ingredient role e.g. Active ingredient, excipient.
   */
  role: CodeableConcept;

  /**
   * If the ingredient is a known or suspected allergen.
   */
  allergenicIndicator?: boolean;

  /**
   * Manufacturer of this Ingredient.
   */
  manufacturer?: Reference<Organization>[];

  /**
   * A specified substance that comprises this ingredient.
   */
  specifiedSubstance?: MedicinalProductIngredientSpecifiedSubstance[];

  /**
   * The ingredient substance.
   */
  substance?: MedicinalProductIngredientSubstance;
}

/**
 * A specified substance that comprises this ingredient.
 */
export interface MedicinalProductIngredientSpecifiedSubstance {

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
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * The specified substance.
   */
  code: CodeableConcept;

  /**
   * The group of specified substance, e.g. group 1 to 4.
   */
  group: CodeableConcept;

  /**
   * Confidentiality level of the specified substance as the ingredient.
   */
  confidentiality?: CodeableConcept;

  /**
   * Quantity of the substance or specified substance present in the
   * manufactured item or pharmaceutical product.
   */
  strength?: MedicinalProductIngredientSpecifiedSubstanceStrength[];
}

/**
 * Quantity of the substance or specified substance present in the
 * manufactured item or pharmaceutical product.
 */
export interface MedicinalProductIngredientSpecifiedSubstanceStrength {

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
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * The quantity of substance in the unit of presentation, or in the
   * volume (or mass) of the single pharmaceutical product or manufactured
   * item.
   */
  presentation: Ratio;

  /**
   * A lower limit for the quantity of substance in the unit of
   * presentation. For use when there is a range of strengths, this is the
   * lower limit, with the presentation attribute becoming the upper limit.
   */
  presentationLowLimit?: Ratio;

  /**
   * The strength per unitary volume (or mass).
   */
  concentration?: Ratio;

  /**
   * A lower limit for the strength per unitary volume (or mass), for when
   * there is a range. The concentration attribute then becomes the upper
   * limit.
   */
  concentrationLowLimit?: Ratio;

  /**
   * For when strength is measured at a particular point or distance.
   */
  measurementPoint?: string;

  /**
   * The country or countries for which the strength range applies.
   */
  country?: CodeableConcept[];

  /**
   * Strength expressed in terms of a reference substance.
   */
  referenceStrength?: MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength[];
}

/**
 * Strength expressed in terms of a reference substance.
 */
export interface MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength {

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
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Relevant reference substance.
   */
  substance?: CodeableConcept;

  /**
   * Strength expressed in terms of a reference substance.
   */
  strength: Ratio;

  /**
   * Strength expressed in terms of a reference substance.
   */
  strengthLowLimit?: Ratio;

  /**
   * For when strength is measured at a particular point or distance.
   */
  measurementPoint?: string;

  /**
   * The country or countries for which the strength range applies.
   */
  country?: CodeableConcept[];
}

/**
 * The ingredient substance.
 */
export interface MedicinalProductIngredientSubstance {

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
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * The ingredient substance.
   */
  code: CodeableConcept;

  /**
   * Quantity of the substance or specified substance present in the
   * manufactured item or pharmaceutical product.
   */
  strength?: MedicinalProductIngredientSpecifiedSubstanceStrength[];
}

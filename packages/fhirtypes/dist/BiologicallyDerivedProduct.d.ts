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
import { Patient } from './Patient';
import { Period } from './Period';
import { Practitioner } from './Practitioner';
import { PractitionerRole } from './PractitionerRole';
import { Reference } from './Reference';
import { Resource } from './Resource';
import { ServiceRequest } from './ServiceRequest';
import { Substance } from './Substance';

/**
 * A material substance originating from a biological entity intended to
 * be transplanted or infused
 * into another (possibly the same) biological entity.
 */
export interface BiologicallyDerivedProduct {

  /**
   * This is a BiologicallyDerivedProduct resource
   */
  readonly resourceType: 'BiologicallyDerivedProduct';

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
   * This records identifiers associated with this biologically derived
   * product instance that are defined by business processes and/or used to
   * refer to it when a direct URL reference to the resource itself is not
   * appropriate (e.g. in CDA documents, or in written / printed
   * documentation).
   */
  identifier?: Identifier[];

  /**
   * Broad category of this product.
   */
  productCategory?: 'organ' | 'tissue' | 'fluid' | 'cells' | 'biologicalAgent';

  /**
   * A code that identifies the kind of this biologically derived product
   * (SNOMED Ctcode).
   */
  productCode?: CodeableConcept;

  /**
   * Whether the product is currently available.
   */
  status?: 'available' | 'unavailable';

  /**
   * Procedure request to obtain this biologically derived product.
   */
  request?: Reference<ServiceRequest>[];

  /**
   * Number of discrete units within this product.
   */
  quantity?: number;

  /**
   * Parent product (if any).
   */
  parent?: Reference<BiologicallyDerivedProduct>[];

  /**
   * How this product was collected.
   */
  collection?: BiologicallyDerivedProductCollection;

  /**
   * Any processing of the product during collection that does not change
   * the fundamental nature of the product. For example adding
   * anti-coagulants during the collection of Peripheral Blood Stem Cells.
   */
  processing?: BiologicallyDerivedProductProcessing[];

  /**
   * Any manipulation of product post-collection that is intended to alter
   * the product.  For example a buffy-coat enrichment or CD8 reduction of
   * Peripheral Blood Stem Cells to make it more suitable for infusion.
   */
  manipulation?: BiologicallyDerivedProductManipulation;

  /**
   * Product storage.
   */
  storage?: BiologicallyDerivedProductStorage[];
}

/**
 * How this product was collected.
 */
export interface BiologicallyDerivedProductCollection {

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
   * Healthcare professional who is performing the collection.
   */
  collector?: Reference<Practitioner | PractitionerRole>;

  /**
   * The patient or entity, such as a hospital or vendor in the case of a
   * processed/manipulated/manufactured product, providing the product.
   */
  source?: Reference<Patient | Organization>;

  /**
   * Time of product collection.
   */
  collectedDateTime?: string;

  /**
   * Time of product collection.
   */
  collectedPeriod?: Period;
}

/**
 * Time of product collection.
 */
export type BiologicallyDerivedProductCollectionCollected = Period | string;

/**
 * Any manipulation of product post-collection that is intended to alter
 * the product.  For example a buffy-coat enrichment or CD8 reduction of
 * Peripheral Blood Stem Cells to make it more suitable for infusion.
 */
export interface BiologicallyDerivedProductManipulation {

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
   * Description of manipulation.
   */
  description?: string;

  /**
   * Time of manipulation.
   */
  timeDateTime?: string;

  /**
   * Time of manipulation.
   */
  timePeriod?: Period;
}

/**
 * Time of manipulation.
 */
export type BiologicallyDerivedProductManipulationTime = Period | string;

/**
 * Any processing of the product during collection that does not change
 * the fundamental nature of the product. For example adding
 * anti-coagulants during the collection of Peripheral Blood Stem Cells.
 */
export interface BiologicallyDerivedProductProcessing {

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
   * Description of of processing.
   */
  description?: string;

  /**
   * Procesing code.
   */
  procedure?: CodeableConcept;

  /**
   * Substance added during processing.
   */
  additive?: Reference<Substance>;

  /**
   * Time of processing.
   */
  timeDateTime?: string;

  /**
   * Time of processing.
   */
  timePeriod?: Period;
}

/**
 * Time of processing.
 */
export type BiologicallyDerivedProductProcessingTime = Period | string;

/**
 * Product storage.
 */
export interface BiologicallyDerivedProductStorage {

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
   * Description of storage.
   */
  description?: string;

  /**
   * Storage temperature.
   */
  temperature?: number;

  /**
   * Temperature scale used.
   */
  scale?: 'farenheit' | 'celsius' | 'kelvin';

  /**
   * Storage timeperiod.
   */
  duration?: Period;
}

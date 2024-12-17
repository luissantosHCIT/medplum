/*
 * This is a generated file
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { Extension } from './Extension';
import { Medication } from './Medication';
import { MedicinalProduct } from './MedicinalProduct';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { ObservationDefinition } from './ObservationDefinition';
import { Reference } from './Reference';
import { Resource } from './Resource';
import { Substance } from './Substance';

/**
 * The interactions of the medicinal product with other medicinal
 * products, or other forms of interactions.
 */
export interface MedicinalProductInteraction {

  /**
   * This is a MedicinalProductInteraction resource
   */
  readonly resourceType: 'MedicinalProductInteraction';

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
   * The medication for which this is a described interaction.
   */
  subject?: Reference<MedicinalProduct | Medication | Substance>[];

  /**
   * The interaction described.
   */
  description?: string;

  /**
   * The specific medication, food or laboratory test that interacts.
   */
  interactant?: MedicinalProductInteractionInteractant[];

  /**
   * The type of the interaction e.g. drug-drug interaction, drug-food
   * interaction, drug-lab test interaction.
   */
  type?: CodeableConcept;

  /**
   * The effect of the interaction, for example &quot;reduced gastric absorption
   * of primary medication&quot;.
   */
  effect?: CodeableConcept;

  /**
   * The incidence of the interaction, e.g. theoretical, observed.
   */
  incidence?: CodeableConcept;

  /**
   * Actions for managing the interaction.
   */
  management?: CodeableConcept;
}

/**
 * The specific medication, food or laboratory test that interacts.
 */
export interface MedicinalProductInteractionInteractant {

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
   * The specific medication, food or laboratory test that interacts.
   */
  itemReference?: Reference<MedicinalProduct | Medication | Substance | ObservationDefinition>;

  /**
   * The specific medication, food or laboratory test that interacts.
   */
  itemCodeableConcept?: CodeableConcept;
}

/**
 * The specific medication, food or laboratory test that interacts.
 */
export type MedicinalProductInteractionInteractantItem = CodeableConcept | Reference<MedicinalProduct | Medication | Substance | ObservationDefinition>;

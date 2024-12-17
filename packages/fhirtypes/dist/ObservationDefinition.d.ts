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
import { Practitioner } from './Practitioner';
import { PractitionerRole } from './PractitionerRole';
import { Range } from './Range';
import { Reference } from './Reference';
import { Resource } from './Resource';
import { ValueSet } from './ValueSet';

/**
 * Set of definitional characteristics for a kind of observation or
 * measurement produced or consumed by an orderable health care service.
 */
export interface ObservationDefinition {

  /**
   * This is a ObservationDefinition resource
   */
  readonly resourceType: 'ObservationDefinition';

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
   * Helps establish the &quot;authority/credibility&quot; of the
   * ObservationDefinition. May also allow for contact.
   */
  publisher?: Reference<Practitioner | PractitionerRole | Organization>;

  /**
   * A code that classifies the general type of observation.
   */
  category?: CodeableConcept[];

  /**
   * Describes what will be observed. Sometimes this is called the
   * observation &quot;name&quot;.
   */
  code: CodeableConcept;

  /**
   * A unique identifier assigned to this ObservationDefinition artifact.
   */
  identifier?: Identifier[];

  /**
   * The data types allowed for the value element of the instance
   * observations conforming to this ObservationDefinition.
   */
  permittedDataType?: ('Quantity' | 'CodeableConcept' | 'string' | 'boolean' | 'integer' | 'Range' | 'Ratio' |
      'SampledData' | 'time' | 'dateTime' | 'Period')[];

  /**
   * Multiple results allowed for observations conforming to this
   * ObservationDefinition.
   */
  multipleResultsAllowed?: boolean;

  /**
   * The method or technique used to perform the observation.
   */
  method?: CodeableConcept;

  /**
   * The preferred name to be used when reporting the results of
   * observations conforming to this ObservationDefinition.
   */
  preferredReportName?: string;

  /**
   * Characteristics for quantitative results of this observation.
   */
  quantitativeDetails?: ObservationDefinitionQuantitativeDetails;

  /**
   * Multiple  ranges of results qualified by different contexts for
   * ordinal or continuous observations conforming to this
   * ObservationDefinition.
   */
  qualifiedInterval?: ObservationDefinitionQualifiedInterval[];

  /**
   * The set of valid coded results for the observations  conforming to
   * this ObservationDefinition.
   */
  validCodedValueSet?: Reference<ValueSet>;

  /**
   * The set of normal coded results for the observations conforming to
   * this ObservationDefinition.
   */
  normalCodedValueSet?: Reference<ValueSet>;

  /**
   * The set of abnormal coded results for the observation conforming to
   * this ObservationDefinition.
   */
  abnormalCodedValueSet?: Reference<ValueSet>;

  /**
   * The set of critical coded results for the observation conforming to
   * this ObservationDefinition.
   */
  criticalCodedValueSet?: Reference<ValueSet>;
}

/**
 * Multiple  ranges of results qualified by different contexts for
 * ordinal or continuous observations conforming to this
 * ObservationDefinition.
 */
export interface ObservationDefinitionQualifiedInterval {

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
   * The category of interval of values for continuous or ordinal
   * observations conforming to this ObservationDefinition.
   */
  category?: 'reference' | 'critical' | 'absolute';

  /**
   * The low and high values determining the interval. There may be only
   * one of the two.
   */
  range?: Range;

  /**
   * Codes to indicate the health context the range applies to. For
   * example, the normal or therapeutic range.
   */
  context?: CodeableConcept;

  /**
   * Codes to indicate the target population this reference range applies
   * to.
   */
  appliesTo?: CodeableConcept[];

  /**
   * Sex of the population the range applies to.
   */
  gender?: 'male' | 'female' | 'other' | 'unknown';

  /**
   * The age at which this reference range is applicable. This is a
   * neonatal age (e.g. number of weeks at term) if the meaning says so.
   */
  age?: Range;

  /**
   * The gestational age to which this reference range is applicable, in
   * the context of pregnancy.
   */
  gestationalAge?: Range;

  /**
   * Text based condition for which the reference range is valid.
   */
  condition?: string;
}

/**
 * Characteristics for quantitative results of this observation.
 */
export interface ObservationDefinitionQuantitativeDetails {

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
   * Customary unit used to report quantitative results of observations
   * conforming to this ObservationDefinition.
   */
  customaryUnit?: CodeableConcept;

  /**
   * SI unit used to report quantitative results of observations conforming
   * to this ObservationDefinition.
   */
  unit?: CodeableConcept;

  /**
   * Factor for converting value expressed with SI unit to value expressed
   * with customary unit.
   */
  conversionFactor?: number;

  /**
   * Number of digits after decimal separator when the results of such
   * observations are of type Quantity.
   */
  decimalPrecision?: number;
}
